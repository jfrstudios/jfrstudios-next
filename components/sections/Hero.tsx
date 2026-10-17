'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextReveal } from '@/components/animations/TextReveal';
import { Button } from '@/components/ui/Button';

gsap.registerPlugin(useGSAP);

/**
 * Hero section — nk.studio-inspired kinetic typography.
 * Bold display headline that reveals on load, accent word in lime green.
 */
export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Subtle floating orbs in background
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(orb2Ref.current, {
        y: 40,
        x: -30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-ink-950 pt-32 md:pt-40 pb-16 md:pb-24"
    >
      {/* Background gradient orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-300/20 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-500/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(190, 242, 100, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(190, 242, 100, 0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse 60% 50% at 50% 40%, black 0%, transparent 80%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-9xl px-6 md:px-10 xl:px-16">
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-[13px] uppercase tracking-[0.12em] font-medium text-accent-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-300 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-300" />
            </span>
            Available for new projects — 2026
          </div>

          {/* Headline */}
          <div className="max-w-[1400px]">
            <h1 className="font-display text-display-xl font-bold tracking-tightest text-cream-50">
              <span className="block">We craft digital</span>
              <span className="block">
                <TextReveal
                  text="experiences"
                  as="span"
                  className="inline-block"
                  wordClassName="text-accent-300"
                />
              </span>
              <span className="block text-cream-100/40">
                <TextReveal
                  text="that ignite brands."
                  as="span"
                  className="inline-block"
                  delay={0.4}
                />
              </span>
            </h1>
          </div>

          {/* Subtitle + CTA */}
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:gap-16 items-end">
            <p className="text-[18px] md:text-[22px] leading-relaxed text-cream-100/70 max-w-2xl">
              From bold identities to immersive websites — JFR Studios is a
              digital studio for ambitious brands at pivotal moments of growth.
              We combine <span className="text-cream-50">strategy</span>,{' '}
              <span className="text-cream-50">creativity</span> and{' '}
              <span className="text-cream-50">technology</span> to move
              businesses forward.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/work" variant="primary" showArrow>
                See our work
              </Button>
              <Button href="/contact" variant="ghost" showArrow>
                Start a project
              </Button>
            </div>
          </div>

          {/* Bottom stats strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-muted-line rounded-2xl overflow-hidden border border-muted-line">
            {[
              { value: '40+', label: 'Projects shipped' },
              { value: '6 wks', label: 'Avg. delivery' },
              { value: '98%', label: 'Client retention' },
              { value: '15+', label: 'Industries served' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-ink-950 p-6 md:p-8 transition-colors duration-250 ease-soft hover:bg-ink-900"
              >
                <p className="font-display text-[42px] md:text-[56px] font-bold tracking-tightest text-accent-300 leading-none">
                  {stat.value}
                </p>
                <p className="mt-3 text-[13px] uppercase tracking-[0.08em] text-cream-100/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-100/40 text-[11px] uppercase tracking-[0.12em]">
        <span>Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-accent-300 to-transparent" />
      </div>
    </section>
  );
}