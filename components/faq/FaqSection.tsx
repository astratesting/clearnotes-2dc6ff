'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import FaqItem from './FaqItem';
import { faqs } from './faqs';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <Container maxWidth="content">
        <div className="text-center mb-10">
          <h2 className="font-heading font-700 text-3xl md:text-[40px] leading-tight tracking-tight text-ink">
            Questions, answered.
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
