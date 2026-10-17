import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const PROJECTS = [
  {
    title: 'Atlas Logistics',
    category: 'Web Development · Branding',
    year: '2026',
    description: 'A new digital foundation for a logistics platform expanding into South Asia.',
    gradient: 'from-accent-300/30 via-accent-400/20 to-ink-900',
  },
  {
    title: 'Karachi Coffee Co.',
    category: 'Brand Identity',
    year: '2025',
    description: 'A bold new identity for a specialty coffee roaster. From logo to packaging.',
    gradient: 'from-cream-100/15 via-accent-300/10 to-ink-900',
  },
  {
    title: 'Northwind Studios',
    category: 'Web · Motion',
    year: '2025',
    description: 'Immersive agency website with WebGL hero, GSAP scroll choreography, and a custom CMS.',
    gradient: 'from-accent-500/30 via-ink-700 to-ink-900',
  },
  {
    title: 'Saffron & Salt',
    category: 'Social Media',
    year: '2025',
    description: 'Restaurant social strategy and content engine. 3x organic reach in 90 days.',
    gradient: 'from-accent-300/20 via-cream-100/5 to-ink-900',
  },
];

export function WorkSection() {
  return (
    <section className="relative bg-ink-950 py-24 md:py-32 border-t border-muted-line">
      <Container>
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="eyebrow mb-4">/ Selected work</p>
            <h2 className="font-display text-display-lg font-bold tracking-tightest text-cream-50 max-w-2xl">
              Recent projects. <span className="text-cream-100/40">Real outcomes.</span>
            </h2>
          </div>
          <Button href="/work" variant="ghost" showArrow>
            View all projects
          </Button>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Link
              key={project.title}
              href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative overflow-hidden rounded-3xl border border-muted-line bg-ink-900 transition-all duration-400 ease-soft hover:border-accent-300/40"
            >
              {/* Cover */}
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[120px] md:text-[180px] font-bold text-cream-50/10 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-accent-300/0 transition-all duration-400 ease-soft group-hover:bg-accent-300/10">
                  <div className="translate-y-4 opacity-0 transition-all duration-400 ease-soft group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ink-950 border border-accent-300 text-accent-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3 text-[12px] uppercase tracking-[0.1em] font-medium">
                  <span className="text-accent-300">{project.category}</span>
                  <span className="text-cream-100/40">{project.year}</span>
                </div>
                <h3 className="font-display text-[24px] md:text-[28px] font-bold tracking-tightest text-cream-50 mb-3 transition-colors duration-250 ease-soft group-hover:text-accent-300">
                  {project.title}
                </h3>
                <p className="text-cream-100/60 text-[15px] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}