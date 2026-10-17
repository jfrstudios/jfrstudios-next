'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  stagger?: number;
  triggerOnView?: boolean;
}

/**
 * Splits text into words/characters and reveals them with a stagger animation.
 * Mimics the smooth, kinetic typography of award-winning studios.
 *
 * @example
 * <TextReveal text="We craft digital experiences" as="h1" className="text-display-xl" />
 */
export function TextReveal({
  text,
  className,
  wordClassName,
  as: Element = 'h1',
  delay = 0,
  stagger = 0.04,
  triggerOnView = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>('[data-word]');

    if (!triggerOnView) {
      words.forEach((word, i) => {
        word.style.transitionDelay = `${delay + i * stagger}s`;
        requestAnimationFrame(() => word.classList.add('is-visible'));
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((word, i) => {
              word.style.transitionDelay = `${delay + i * stagger}s`;
              word.classList.add('is-visible');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, stagger, triggerOnView]);

  const words = text.split(' ');

  const content = (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          data-word
          aria-hidden="true"
          className={cn(
            'inline-block overflow-hidden align-baseline',
            wordClassName
          )}
        >
          <span
            className={cn(
              'inline-block translate-y-[110%] opacity-0 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]',
              '[&.is-visible]:translate-y-0 [&.is-visible]:opacity-100'
            )}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </>
  );

  if (Element === 'h1') {
    return (
      <h1 ref={ref as React.Ref<HTMLHeadingElement>} className={className}>
        {content}
      </h1>
    );
  }
  if (Element === 'h2') {
    return (
      <h2 ref={ref as React.Ref<HTMLHeadingElement>} className={className}>
        {content}
      </h2>
    );
  }
  if (Element === 'h3') {
    return (
      <h3 ref={ref as React.Ref<HTMLHeadingElement>} className={className}>
        {content}
      </h3>
    );
  }
  if (Element === 'p') {
    return (
      <p ref={ref as ReactParagraphElement} className={className}>
        {content}
      </p>
    );
  }
  return (
    <span ref={ref as React.Ref<HTMLSpanElement>} className={className}>
      {content}
    </span>
  );
}