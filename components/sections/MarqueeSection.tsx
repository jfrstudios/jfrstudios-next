import { Container } from '@/components/ui/Container';

const ITEMS = [
  'Web Development',
  'Branding',
  'Social Media',
  'Graphic Design',
  'Strategy',
  'UI/UX',
  'Motion',
  'WebGL',
];

export function MarqueeSection() {
  return (
    <section className="relative bg-ink-900 border-y border-muted-line py-12 md:py-16 overflow-hidden">
      <Container>
        <div className="flex items-center gap-6 mb-8">
          <p className="eyebrow flex-shrink-0">/ Disciplines</p>
          <span className="h-px flex-1 bg-muted-line" />
        </div>
      </Container>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-shrink-0 gap-12 animate-marquee whitespace-nowrap pr-12">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-display text-[48px] md:text-[80px] font-bold tracking-tightest text-cream-50/30 flex items-center gap-12"
            >
              {item}
              <span className="text-accent-300">✺</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}