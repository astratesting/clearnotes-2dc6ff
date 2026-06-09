'use client';

import { trackEvent, EVENTS } from '@/components/analytics/events';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
  disabled?: boolean;
  planValue?: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  ctaHref,
  popular = false,
  disabled = false,
  planValue,
}: PricingCardProps) {
  const handleClick = () => {
    trackEvent(EVENTS.PRICING_CARD_CLICK, { plan: planValue || name.toLowerCase() });
  };

  return (
    <div
      className={`relative rounded-2xl p-6 border transition-shadow ${
        popular
          ? 'border-violet shadow-lg bg-white'
          : disabled
          ? 'border-line bg-cream-2/50 opacity-70'
          : 'border-line bg-white shadow-card hover:shadow-lg'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-coral text-white text-xs font-medium">
          Popular
        </div>
      )}

      <div className="mb-5">
        <h3 className="font-heading font-semibold text-lg text-ink mb-1">
          {name}
        </h3>
        <p className="text-sm text-ink-muted">{description}</p>
      </div>

      <div className="mb-6">
        <span className="font-heading font-bold text-4xl text-ink">{price}</span>
        {period && (
          <span className="text-sm text-ink-muted ml-1">{period}</span>
        )}
      </div>

      <ul className="space-y-2.5 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink-muted">
            <svg
              className="w-4 h-4 text-violet mt-0.5 shrink-0"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3.5 8.5L6.5 11.5L12.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={disabled ? '#waitlist' : ctaHref}
        onClick={handleClick}
        className={`block w-full text-center py-3 rounded-xl font-heading font-semibold text-sm transition-colors ${
          disabled
            ? 'bg-line/50 text-ink-muted cursor-not-allowed'
            : popular
            ? 'bg-violet text-white hover:bg-[#6D28D9]'
            : 'border border-violet text-violet hover:bg-violet-soft'
        }`}
        {...(planValue ? { 'data-plan': planValue } : {})}
      >
        {cta}
      </a>
    </div>
  );
}
