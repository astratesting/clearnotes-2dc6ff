import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import InteractiveDemo from './InteractiveDemo';

export default function DemoSection() {
  return (
    <Section id="demo" bg="cream-2">
      <Container maxWidth="wide">
        <div className="text-center mb-10">
          <h2 className="font-heading font-700 text-3xl md:text-[40px] leading-tight tracking-tight text-ink mb-4">
            From brain dump to organized &mdash; in 2 seconds.
          </h2>
        </div>

        <InteractiveDemo />
      </Container>
    </Section>
  );
}
