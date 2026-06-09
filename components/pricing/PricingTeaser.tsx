import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PricingCard from './PricingCard';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Free forever, during beta.',
    features: [
      'Up to 500 notes',
      'All features included',
      '1 device',
      'Local storage',
    ],
    cta: 'Join waitlist',
    ctaHref: '#waitlist',
    planValue: 'free',
  },
  {
    name: 'Personal',
    price: '$8',
    period: '/mo',
    description: 'For daily note-takers.',
    features: [
      'Unlimited notes',
      '5 devices + sync',
      "Today's Focus digest",
      'Export to Markdown, Notion, TXT',
    ],
    cta: 'Join waitlist',
    ctaHref: '#waitlist',
    popular: true,
    planValue: 'personal',
  },
  {
    name: 'Pro',
    price: '$16',
    period: '/mo',
    description: 'For teams. Coming soon.',
    features: [
      'Everything in Personal',
      'Team workspaces',
      'API access',
      'Priority support',
    ],
    cta: 'Notify me',
    ctaHref: '#waitlist',
    disabled: true,
    planValue: 'pro',
  },
];

export default function PricingTeaser() {
  return (
    <Section id="pricing" bg="cream-2">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-700 text-3xl md:text-[40px] leading-tight tracking-tight text-ink mb-4">
            Simple, fair pricing.
          </h2>
          <p className="text-lg text-ink-muted max-w-md mx-auto">
            Pay once it earns its keep. Free while in beta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <p className="text-center text-sm text-ink-muted/70">
          Cancel anytime. 14-day refund. No card to start.
        </p>
      </Container>
    </Section>
  );
}
