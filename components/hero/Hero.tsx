import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import ProductMock from './ProductMock';
import OrbitBackground from '@/components/orbit/OrbitBackground';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Orbit background decoration */}
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] opacity-20">
        <OrbitBackground />
      </div>

      <Container maxWidth="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="relative z-10">
            <Eyebrow className="mb-6">
              <span role="img" aria-label="sparkles">&#10024;</span> AI that organizes your notes
            </Eyebrow>

            <h1 className="font-heading font-700 text-4xl sm:text-5xl md:text-[56px] leading-[1.1] tracking-tight text-ink mb-6">
              Notes that organize themselves.
            </h1>

            <p className="text-lg md:text-xl text-ink-muted max-w-lg mb-8 leading-relaxed">
              Write the way you think. ClearNotes sorts, tags, and connects your
              notes automatically &mdash; so you stop filing and start finding.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <a
                href="#waitlist"
                id="hero-cta"
                className="inline-flex items-center gap-2 h-12 px-7 bg-violet text-white font-heading font-semibold rounded-xl hover:bg-[#6D28D9] transition-all group"
              >
                Join the waitlist
                <ArrowRight
                  size={18}
                  className="text-coral group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href="#demo"
                className="text-sm text-ink-muted hover:text-violet font-medium transition-colors underline underline-offset-4 decoration-ink-muted/30 hover:decoration-violet"
              >
                Watch the 30-second demo
              </a>
            </div>

            <p className="text-sm text-ink-muted/70">
              No credit card. Early access rolling out this quarter.
            </p>
          </div>

          {/* Product mock column */}
          <div className="relative z-10 lg:pl-4">
            <ProductMock />
          </div>
        </div>
      </Container>
    </section>
  );
}
