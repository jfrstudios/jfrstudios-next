import { Container } from '@/components/ui/Container';
import { TextReveal } from '@/components/animations/TextReveal';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    no: '01',
    title: 'Web Development',
    description:
      'Custom-coded websites and web applications. Next.js, React, performance-first builds that scale with your business.',
    tags: ['Next.js', 'React', 'TypeScript', 'GSAP', 'CMS'],
  },
  {
    no: '02',
    title: 'Branding & Identity',
    description:
      'Visual identities that stand out. Logo systems, brand strategy, and guidelines that make your business unmistakable.',
    tags: ['Strategy', 'Logo', 'Identity', 'Guidelines'],
  },
  {
    no: '03',
    title: 'Social Media',
    description:
      'Content strategy and management that grows engaged audiences. From positioning to daily publishing.',
    tags: ['Strategy', 'Content', 'Community', 'Analytics'],
  },
  {
    no: '04',
    title: 'Graphic Design',
    description:
      'Posters, decks, social posts, and brand collateral. Editorial-grade visuals for every touchpoint.',
    tags: ['Editorial', 'Print', 'Digital', 'Motion'],
  },
];

export function ServicesSection() {
  return (
    <section className="relative bg-ink-950 py-24 md:py-32 border-t border-muted-line">
      <Container>
        {/* Heading */}
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16 mb-16 md:mb-24">
          <p className="eyebrow">/ What we do</p>
          <h2 className="font-display text-display-lg font-bold tracking-tightest text-cream-50">
            Four disciplines.{' '}
            <span className="text-cream-100/40">One studio.</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid gap-px bg-muted-line rounded-3xl overflow-hidden border border-muted-line md:grid-cols-2">
          {SERVICES.map((service) => (
            <Link
              key={service.no}
              href="/services"
              className="group relative bg-ink-950 p-8 md:p-12 transition-all duration-400 ease-soft hover:bg-ink-900"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[13px] uppercase tracking-[0.12em] font-medium text-accent-300">
                  ({service.no})
                </span>
                <ArrowUpRight className="w-5 h-5 text-cream-100/40 transition-all duration-250 ease-soft group-hover:text-accent-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>

              <h3 className="font-display text-[28px] md:text-[36px] font-bold tracking-tightest text-cream-50 mb-4 transition-colors duration-250 ease-soft group-hover:text-accent-300">
                {service.title}
              </h3>

              <p className="text-cream-100/60 text-[16px] leading-relaxed max-w-md mb-8">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 text-[11px] uppercase tracking-[0.08em] font-medium rounded-full border border-muted-line text-cream-100/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}