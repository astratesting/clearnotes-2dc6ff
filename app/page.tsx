import Nav from '@/components/nav/Nav';
import Hero from '@/components/hero/Hero';
import DemoSection from '@/components/demo/DemoSection';
import FeaturesGrid from '@/components/features/FeaturesGrid';
import HowItWorks from '@/components/how/HowItWorks';
import PricingTeaser from '@/components/pricing/PricingTeaser';
import FaqSection from '@/components/faq/FaqSection';
import FinalCta from '@/components/cta/FinalCta';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <DemoSection />
        <FeaturesGrid />
        <HowItWorks />
        <PricingTeaser />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
