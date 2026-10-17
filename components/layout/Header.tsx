'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Studio', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-soft',
          isScrolled
            ? 'bg-ink-950/80 backdrop-blur-xl border-b border-muted-line'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex w-full max-w-9xl items-center justify-between px-6 md:px-10 xl:px-16 py-5 md:py-6">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-1 font-display text-[20px] font-bold tracking-tight"
          >
            <span className="text-cream-50">/JFR</span>
            <span className="text-accent-300">.</span>
            <span className="text-cream-50/70">studios</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-cream-50/20 px-5 py-2.5 text-[13px] uppercase tracking-[0.08em] font-medium text-cream-50 transition-all duration-250 ease-soft hover:border-accent-300 hover:text-accent-300"
          >
            Let's talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream-50/20 text-cream-50"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden bg-ink-950 transition-opacity duration-400 ease-soft',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex h-full flex-col justify-center px-6 pt-24">
          <nav className="flex flex-col gap-6">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'font-display text-[42px] font-bold tracking-tightest text-cream-50 transition-all duration-400 ease-soft hover:text-accent-300',
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                )}
                style={{
                  transitionDelay: isOpen ? `${i * 60 + 100}ms` : '0ms',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex flex-col gap-3 text-[14px] text-cream-100/60">
            <a href="mailto:hello@jfrstudios.com" className="hover:text-accent-300">
              hello@jfrstudios.com
            </a>
            <p>Pakistan · Available worldwide</p>
          </div>
        </div>
      </div>
    </>
  );
}