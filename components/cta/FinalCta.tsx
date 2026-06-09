import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import WaitlistForm from './WaitlistForm';

export default function FinalCta() {
  return (
    <Section id="waitlist" bg="cream-2">
      <Container maxWidth="content">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-heading font-700 text-3xl md:text-[40px] leading-tight tracking-tight text-ink mb-8">
            Stop organizing your notes. Start using them.
          </h2>

          <WaitlistForm source="final-cta" variant="inline" />

          <p className="text-xs text-ink-muted/50 mt-4">
            We&apos;ll only email you about ClearNotes. Unsubscribe in one click.
          </p>
        </div>
      </Container>
    </Section>
  );
}
