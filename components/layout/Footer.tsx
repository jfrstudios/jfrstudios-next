import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const NAV_GROUPS = [
  {
    title: 'Studio',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Work', href: '/work' },
      { label: 'Insights', href: '/insights' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Instagram', href: 'https://instagram.com/jfrstudios', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/jfrstudios', external: true },
      { label: 'Behance', href: 'https://behance.net/jfrstudios', external: true },
      { label: 'Dribbble', href: 'https://dribbble.com/jfrstudios', external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-muted-line">
      <div className="mx-auto w-full max-w-9xl px-6 md:px-10 xl:px-16 py-16 md:py-24">
        {/* Top — Big CTA */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 pb-16 border-b border-muted-line">
          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <h2 className="font-display text-display-md font-bold tracking-tightest text-cream-50">
              Let's build something <span className="text-accent-300">brilliant</span> together.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <a
              href="mailto:hello@jfrstudios.com"
              className="group inline-flex items-center gap-3 font-display text-[28px] md:text-[36px] font-semibold tracking-tightest text-cream-50 transition-colors duration-250 ease-soft hover:text-accent-300"
            >
              hello@jfrstudios.com
              <ArrowUpRight className="w-7 h-7 md:w-9 md:h-9 transition-transform duration-250 ease-soft group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="text-cream-100/60 text-[15px] max-w-md">
              Based in Pakistan. Working with ambitious brands worldwide.
              Typically replies within 24 hours.
            </p>
          </div>
        </div>

        {/* Middle — Nav groups */}
        <div className="grid gap-10 md:grid-cols-4 py-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-1 font-display text-[32px] font-bold tracking-tight"
            >
              <span className="text-cream-50">/JFR</span>
              <span className="text-accent-300">.</span>
              <span className="text-cream-50/70">studios</span>
            </Link>
            <p className="mt-4 text-cream-100/60 text-[15px] max-w-sm">
              Digital studio crafting bold brands, immersive websites, and
              experiences that move people.
            </p>
          </div>

          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-accent-300 mb-4">
                {group.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream-100/80 hover:text-accent-300 text-[15px] transition-colors duration-250 ease-soft"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-cream-100/80 hover:text-accent-300 text-[15px] transition-colors duration-250 ease-soft"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom — Copyright */}
        <div className="pt-8 border-t border-muted-line flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-cream-100/50">
          <p>
            © {new Date().getFullYear()} JFR Studios. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <span className="text-accent-300">♥</span> using Next.js, Tailwind & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}