import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Step from './Step';

// Inline SVG illustrations — hand-drawn style
function ScribbleIllustration() {
  return (
    <svg width="220" height="160" viewBox="0 0 220 160" fill="none" aria-hidden="true" className="max-w-full">
      {/* Messy scribble lines */}
      <path d="M20 40 Q60 20, 100 45 T180 35" stroke="var(--ink-muted)" strokeWidth="2" strokeLinecap="round" opacity="0.2" fill="none" />
      <path d="M15 70 Q70 50, 110 75 T190 60" stroke="var(--ink-muted)" strokeWidth="2" strokeLinecap="round" opacity="0.15" fill="none" />
      <path d="M25 100 Q55 80, 95 105 T175 90" stroke="var(--ink-muted)" strokeWidth="2" strokeLinecap="round" opacity="0.12" fill="none" />
      {/* Text-like lines */}
      <rect x="30" y="38" width="80" height="4" rx="2" fill="var(--ink-muted)" opacity="0.15" />
      <rect x="30" y="50" width="60" height="4" rx="2" fill="var(--ink-muted)" opacity="0.12" />
      <rect x="30" y="62" width="90" height="4" rx="2" fill="var(--ink-muted)" opacity="0.1" />
      <rect x="30" y="85" width="70" height="4" rx="2" fill="var(--ink-muted)" opacity="0.12" />
      <rect x="30" y="97" width="55" height="4" rx="2" fill="var(--ink-muted)" opacity="0.1" />
      {/* Pencil icon */}
      <path d="M170 110 L190 90 L195 95 L175 115 Z" fill="var(--coral)" opacity="0.6" />
      <path d="M170 110 L175 115 L165 118 Z" fill="var(--coral)" opacity="0.4" />
    </svg>
  );
}

function OrbitPullIllustration() {
  return (
    <svg width="220" height="160" viewBox="0 0 220 160" fill="none" aria-hidden="true" className="max-w-full">
      {/* Central point */}
      <circle cx="110" cy="80" r="8" fill="var(--violet)" opacity="0.3" />
      <circle cx="110" cy="80" r="3" fill="var(--violet)" />
      {/* Orbit rings */}
      <ellipse cx="110" cy="80" rx="60" ry="30" stroke="var(--violet)" strokeWidth="1" opacity="0.15" fill="none" strokeDasharray="4 4" />
      <ellipse cx="110" cy="80" rx="90" ry="45" stroke="var(--violet)" strokeWidth="1" opacity="0.1" fill="none" strokeDasharray="4 4" />
      {/* Dots being pulled */}
      <circle cx="50" cy="40" r="4" fill="var(--coral)" opacity="0.7" />
      <circle cx="170" cy="50" r="4" fill="var(--coral)" opacity="0.7" />
      <circle cx="40" cy="110" r="4" fill="var(--honey)" opacity="0.7" />
      <circle cx="180" cy="115" r="4" fill="var(--honey)" opacity="0.7" />
      <circle cx="90" cy="30" r="3" fill="var(--violet)" opacity="0.5" />
      <circle cx="140" cy="120" r="3" fill="var(--violet)" opacity="0.5" />
      {/* Pull lines */}
      <line x1="50" y1="40" x2="105" y2="75" stroke="var(--coral)" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
      <line x1="170" y1="50" x2="115" y2="75" stroke="var(--coral)" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
      <line x1="40" y1="110" x2="105" y2="85" stroke="var(--honey)" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
      <line x1="180" y1="115" x2="115" y2="85" stroke="var(--honey)" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
    </svg>
  );
}

function OrganizedCardsIllustration() {
  return (
    <svg width="220" height="160" viewBox="0 0 220 160" fill="none" aria-hidden="true" className="max-w-full">
      {/* Card 1 */}
      <rect x="15" y="15" width="85" height="55" rx="10" fill="white" stroke="var(--line)" strokeWidth="1" />
      <rect x="25" y="25" width="40" height="3" rx="1.5" fill="var(--violet)" opacity="0.6" />
      <rect x="25" y="34" width="55" height="3" rx="1.5" fill="var(--ink-muted)" opacity="0.15" />
      <rect x="25" y="43" width="45" height="3" rx="1.5" fill="var(--ink-muted)" opacity="0.12" />
      <circle cx="85" cy="55" r="3" fill="var(--violet)" opacity="0.3" />

      {/* Card 2 */}
      <rect x="115" y="20" width="85" height="50" rx="10" fill="white" stroke="var(--line)" strokeWidth="1" />
      <rect x="125" y="30" width="35" height="3" rx="1.5" fill="var(--coral)" opacity="0.6" />
      <rect x="125" y="39" width="55" height="3" rx="1.5" fill="var(--ink-muted)" opacity="0.15" />
      <rect x="125" y="48" width="40" height="3" rx="1.5" fill="var(--ink-muted)" opacity="0.12" />

      {/* Card 3 */}
      <rect x="55" y="85" width="85" height="50" rx="10" fill="white" stroke="var(--line)" strokeWidth="1" />
      <rect x="65" y="95" width="50" height="3" rx="1.5" fill="var(--honey)" opacity="0.6" />
      <rect x="65" y="104" width="55" height="3" rx="1.5" fill="var(--ink-muted)" opacity="0.15" />
      <rect x="65" y="113" width="30" height="3" rx="1.5" fill="var(--ink-muted)" opacity="0.12" />
      {/* Tags */}
      <rect x="65" y="121" width="25" height="8" rx="4" fill="var(--coral-soft)" />
      <rect x="95" y="121" width="30" height="8" rx="4" fill="var(--violet-soft)" />
    </svg>
  );
}

const steps = [
  {
    number: 1,
    title: 'Write freely.',
    description:
      'No folders to pick. No templates to set up. Just start typing. Dump your thoughts however they come — messy, incomplete, stream-of-consciousness.',
    illustration: <ScribbleIllustration />,
  },
  {
    number: 2,
    title: 'ClearNotes reads along.',
    description:
      'On-device embeddings cluster your notes by meaning, not by where you filed them. The Orbit engine groups related ideas in real-time.',
    illustration: <OrbitPullIllustration />,
    reversed: true,
  },
  {
    number: 3,
    title: 'Structure appears.',
    description:
      'Topics, subtopics, tags, and links surface on their own. You stay in flow — the organizing happens around you.',
    illustration: <OrganizedCardsIllustration />,
  },
];

export default function HowItWorks() {
  return (
    <Section id="how">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading font-700 text-3xl md:text-[40px] leading-tight tracking-tight text-ink">
            How the Orbit engine works.
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
