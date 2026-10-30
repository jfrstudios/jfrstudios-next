'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/**
 * MotionLayer — the nk.studio-style interaction layer.
 *
 * Deliberately dependency-free (no GSAP / Lenis): everything below is
 * hand-rolled so the production build can never break on a new package.
 *
 *  1. Page wipe transition between routes
 *  2. Scroll progress bar
 *  3. Custom cursor (gold ring + dot, pointer:fine only)
 *  4. Lerped smooth scrolling (desktop only, honours reduced-motion)
 *  5. Split-text heading reveals
 *  6. Scroll reveals with per-row stagger
 *  7. Magnetic pill buttons
 */

const REVEAL_TAGS = new Set([
  'DIV',
  'ARTICLE',
  'SECTION',
  'LI',
  'FIGURE',
  'HEADER',
  'FOOTER',
  'UL',
  'OL',
  'FORM',
  'ASIDE',
  'BLOCKQUOTE',
]);

export default function MotionLayer() {
  const router = useRouter();
  const pathname = usePathname();
  const wipeRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef(false);

  /* ------------------------------------------------------------------ *
   * 1. Page wipe transition
   * ------------------------------------------------------------------ */
  useEffect(() => {
    const wipe = wipeRef.current;
    if (!wipe) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;
      if (href.startsWith('#')) return;
      if (/^(mailto:|tel:|sms:|whatsapp:)/i.test(href)) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname + url.search === window.location.pathname + window.location.search) return;

      e.preventDefault();
      pendingRef.current = true;
      wipe.classList.add('is-in');

      window.setTimeout(() => {
        router.push(url.pathname + url.search + url.hash);
        // Safety net: if the client router stalls, fall back to a hard load.
        window.setTimeout(() => {
          if (pendingRef.current) window.location.href = url.href;
        }, 2600);
      }, 430);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router]);

  useEffect(() => {
    const wipe = wipeRef.current;
    if (!wipe) return;
    pendingRef.current = false;
    wipe.classList.remove('is-in');
  }, [pathname]);

  /* ------------------------------------------------------------------ *
   * 2 + 3 + 4 + 5 + 6 + 7 — all runtime behaviours
   * ------------------------------------------------------------------ */
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const cleanups: Array<() => void> = [];

    /* ---------------- 2. scroll progress ---------------- */
    const progress = document.querySelector<HTMLElement>('.jc-progress');
    if (progress) {
      let raf = 0;
      const update = () => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        progress.style.transform = `scaleX(${pct})`;
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(update);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      update();
      cleanups.push(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (raf) cancelAnimationFrame(raf);
      });
    }

    /* ---------------- 3. custom cursor ---------------- */
    const ring = document.querySelector<HTMLElement>('.jc-cursor');
    const dot = document.querySelector<HTMLElement>('.jc-cursor-dot');

    if (ring && dot && finePointer && !reduce) {
      root.classList.add('jc-cursor-on');
      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let rx = mx;
      let ry = my;
      let raf = 0;

      const loop = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
        raf = requestAnimationFrame(loop);
      };

      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        ring.classList.add('is-visible');
        dot.classList.add('is-visible');
      };
      const onLeave = () => {
        ring.classList.remove('is-visible');
        dot.classList.remove('is-visible');
      };
      const onOver = (e: MouseEvent) => {
        const target = (e.target as HTMLElement | null)?.closest?.(
          'a, button, [role="button"], input, textarea, select'
        );
        ring.classList.toggle('is-hover', Boolean(target));
      };

      window.addEventListener('mousemove', onMove, { passive: true });
      document.addEventListener('mouseleave', onLeave);
      document.addEventListener('mouseover', onOver, { passive: true });
      raf = requestAnimationFrame(loop);

      cleanups.push(() => {
        window.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseleave', onLeave);
        document.removeEventListener('mouseover', onOver);
        if (raf) cancelAnimationFrame(raf);
        root.classList.remove('jc-cursor-on');
      });
    }

    /* ---------------- 4. lerped smooth scroll ---------------- */
    if (!reduce && finePointer) {
      let target = window.scrollY;
      let current = target;
      let raf = 0;
      let running = false;
      let internal = false;

      const maxScroll = () =>
        Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

      const tick = () => {
        current += (target - current) * 0.12;
        if (Math.abs(target - current) < 0.5) {
          current = target;
          internal = true;
          window.scrollTo(0, current);
          internal = false;
          running = false;
          return;
        }
        internal = true;
        window.scrollTo(0, current);
        internal = false;
        raf = requestAnimationFrame(tick);
      };

      const start = () => {
        if (!running) {
          running = true;
          raf = requestAnimationFrame(tick);
        }
      };

      const onWheel = (e: WheelEvent) => {
        if (e.ctrlKey) return; // pinch-zoom
        const el = e.target as HTMLElement | null;
        if (el && el.closest('.jc-scroll-native')) return;
        e.preventDefault();
        const scale = e.deltaMode === 1 ? 18 : e.deltaMode === 2 ? window.innerHeight : 1;
        target = Math.max(0, Math.min(target + e.deltaY * scale, maxScroll()));
        start();
      };

      const onKey = (e: KeyboardEvent) => {
        const tag = (e.target as HTMLElement | null)?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        let delta = 0;
        if (e.key === 'ArrowDown') delta = 90;
        else if (e.key === 'ArrowUp') delta = -90;
        else if (e.key === 'PageDown' || e.key === ' ') delta = window.innerHeight * 0.9;
        else if (e.key === 'PageUp') delta = -window.innerHeight * 0.9;
        else if (e.key === 'Home') {
          e.preventDefault();
          target = 0;
          start();
          return;
        } else if (e.key === 'End') {
          e.preventDefault();
          target = maxScroll();
          start();
          return;
        } else return;
        e.preventDefault();
        target = Math.max(0, Math.min(target + delta, maxScroll()));
        start();
      };

      const onScroll = () => {
        if (internal) return;
        // Something else moved the page (scrollbar drag, focus scroll, etc.)
        target = window.scrollY;
        current = window.scrollY;
      };

      const onResize = () => {
        target = Math.min(target, maxScroll());
      };

      const onAnchor = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]');
        if (!anchor) return;
        const id = anchor.getAttribute('href');
        if (!id || id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        target = Math.max(0, Math.min(top, maxScroll()));
        current = window.scrollY;
        start();
      };

      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('keydown', onKey);
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize);
      document.addEventListener('click', onAnchor, true);

      cleanups.push(() => {
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('keydown', onKey);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('click', onAnchor, true);
        if (raf) cancelAnimationFrame(raf);
      });
    }

    /* ---------------- 5. split-text headings ---------------- */
    const splitHeadings = () => {
      const headings = document.querySelectorAll<HTMLElement>('main h1, main h2, main h3');
      headings.forEach((el) => {
        if (el.dataset.jcSplit === '1') return;
        if (el.querySelector('*')) return; // nested markup -> leave alone
        const text = (el.textContent || '').trim();
        if (text.length < 5) return;

        const words = text.split(/\s+/);
        const line = document.createElement('span');
        line.className = 'jc-line';

        words.forEach((word, i) => {
          const outer = document.createElement('span');
          outer.className = 'jc-word';
          outer.style.setProperty('--jc-i', String(i));
          const inner = document.createElement('span');
          inner.className = 'jc-word-i';
          inner.textContent = word;
          outer.appendChild(inner);
          line.appendChild(outer);
          if (i < words.length - 1) line.appendChild(document.createTextNode(' '));
        });

        el.textContent = '';
        el.appendChild(line);
        el.dataset.jcSplit = '1';
      });
    };

    /* ---------------- 6. scroll reveals ---------------- */
    const collectRevealTargets = (): HTMLElement[] => {
      const out: HTMLElement[] = [];
      const scopes = document.querySelectorAll<HTMLElement>('main, footer');
      scopes.forEach((scope) => {
        scope.querySelectorAll<HTMLElement>('*').forEach((el) => {
          if (!REVEAL_TAGS.has(el.tagName)) return;
          if (el.children.length === 0) return;
          const parent = el.parentElement;
          if (!parent) return;
          const parentDisplay = getComputedStyle(parent).display;
          if (parentDisplay !== 'grid' && parentDisplay !== 'flex' && parentDisplay !== 'inline-flex') {
            return;
          }
          const style = getComputedStyle(el);
          if (style.position === 'absolute' || style.position === 'fixed') return;
          if (style.opacity !== '1') return;
          const html = el.innerHTML;
          if (html.includes('sticky') || html.includes('position:fixed')) return;
          out.push(el);
        });
      });
      return out;
    };

    if (!reduce) {
      splitHeadings();
      const targets = collectRevealTargets();

      const groups = new Map<HTMLElement, HTMLElement[]>();
      targets.forEach((el) => {
        const parent = el.parentElement!;
        const list = groups.get(parent) || [];
        list.push(el);
        groups.set(parent, list);
      });

      groups.forEach((list) => {
        list.forEach((el, i) => {
          el.classList.add('jc-reveal');
          el.style.setProperty('--jc-delay', `${Math.min(i, 5) * 70}ms`);
        });
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.classList.add('is-visible');
            io.unobserve(el);
          });
        },
        { threshold: 0.06, rootMargin: '0px 0px -8% 0px' }
      );

      targets.forEach((el) => io.observe(el));

      const headingIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            (entry.target as HTMLElement).classList.add('is-in');
            headingIo.unobserve(entry.target);
          });
        },
        { threshold: 0.15 }
      );
      document.querySelectorAll<HTMLElement>('main h1, main h2, main h3').forEach((h) => headingIo.observe(h));

      cleanups.push(() => {
        io.disconnect();
        headingIo.disconnect();
      });
    }

    /* ---------------- 8. stat counters ---------------- */
    const counters = document.querySelectorAll<HTMLElement>('[data-jc-count]');
    if (counters.length && !reduce) {
      const counterIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            counterIo.unobserve(el);

            const raw = el.getAttribute('data-jc-count') || '';
            const match = raw.match(/^(\D*)(\d[\d,]*)(.*)$/);
            if (!match) return;
            const pre = match[1];
            const goal = parseInt(match[2].replace(/,/g, ''), 10);
            const post = match[3];
            if (!Number.isFinite(goal)) return;

            const duration = 1400;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              const value = Math.round(goal * eased);
              el.textContent = `${pre}${value.toLocaleString('en-US')}${post}`;
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach((el) => counterIo.observe(el));
      cleanups.push(() => counterIo.disconnect());
    }

    /* ---------------- 7. magnetic pill buttons ---------------- */
    if (finePointer && !reduce) {
      const pills: HTMLElement[] = [];
      document
        .querySelectorAll<HTMLElement>('a, button')
        .forEach((el) => {
          if (el.classList.contains('jc-magnetic')) return;
          const radius = parseInt(getComputedStyle(el).borderTopLeftRadius, 10);
          if (!Number.isFinite(radius) || radius < 999) return;
          if (el.closest('.jc-no-magnet')) return;
          pills.push(el);
          el.classList.add('jc-magnetic');
        });

      const onMove = (e: MouseEvent) => {
        pills.forEach((pill) => {
          const rect = pill.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = e.clientX - cx;
          const dy = e.clientY - cy;
          const dist = Math.hypot(dx, dy);
          const reach = Math.max(rect.width, rect.height) * 0.9;
          if (dist < reach && dist > 0) {
            const force = (1 - dist / reach) * 12;
            pill.style.transform = `translate3d(${(dx / dist) * force}px, ${(dy / dist) * force}px, 0)`;
          } else if (pill.style.transform) {
            pill.style.transform = '';
          }
        });
      };

      const onLeave = () => {
        pills.forEach((pill) => {
          pill.style.transform = '';
        });
      };

      window.addEventListener('mousemove', onMove, { passive: true });
      document.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        window.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseleave', onLeave);
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <div ref={wipeRef} className="jc-wipe" aria-hidden="true">
        <span className="jc-wipe-label">JFR</span>
      </div>
      <div className="jc-progress" aria-hidden="true" />
      <div className="jc-cursor" aria-hidden="true" />
      <div className="jc-cursor-dot" aria-hidden="true" />
    </>
  );
}
