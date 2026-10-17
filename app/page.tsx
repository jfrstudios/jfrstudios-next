import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkSection } from '@/components/sections/WorkSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeSection />
        <ServicesSection />
        <WorkSection />
        {/* TODO: Add InsightsSection + ProcessSection + Testimonials in next phase */}
      </main>
      <Footer />
    </>
  );
}