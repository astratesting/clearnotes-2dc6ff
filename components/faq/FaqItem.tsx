'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { trackEvent, EVENTS } from '@/components/analytics/events';

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: FaqItemProps) {
  const handleToggle = () => {
    if (!isOpen) {
      trackEvent(EVENTS.FAQ_OPEN, { question: question.slice(0, 50) });
    }
    onToggle();
  };

  const id = `faq-${index}`;

  return (
    <div className="border-b border-line last:border-b-0">
      <button
        id={`${id}-trigger`}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        onClick={handleToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-heading font-semibold text-ink pr-4">
          {question}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={`text-ink-muted shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className="faq-content"
        data-open={isOpen}
      >
        <div>
          <p className="pb-5 text-ink-muted leading-relaxed pr-8">{answer}</p>
        </div>
      </div>
    </div>
  );
}
