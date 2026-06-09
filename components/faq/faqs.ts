export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Is my data private?',
    answer:
      "Yes. Notes are encrypted at rest and in transit. We never train models on your notes. Embeddings are generated on-device where possible.",
  },
  {
    question: 'How is this different from Notion AI or Obsidian?',
    answer:
      "Notion and Obsidian are great, but you still do the organizing. ClearNotes does it for you, automatically, from the first note you write.",
  },
  {
    question: 'Do you support Markdown?',
    answer:
      'Yes — full Markdown in/out, including a one-click export of your entire library.',
  },
  {
    question: 'Can I import my existing notes?',
    answer:
      'Evernote, Notion, Apple Notes, and plain Markdown. Import is one-click during onboarding.',
  },
  {
    question: 'Does it work offline?',
    answer:
      "Yes. The organizer runs locally; sync happens when you're back online.",
  },
  {
    question: 'What AI model powers it?',
    answer:
      'A mix of small on-device models for clustering and a frontier LLM for natural-language features. We document the stack in our trust center.',
  },
  {
    question: 'When will I get access?',
    answer:
      'Waitlist members get access in the order they joined. We ship a new batch roughly every 2 weeks.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes — 14 days, no questions asked.',
  },
];
