import {
  FolderOpen,
  Tags,
  Link2,
  Sunrise,
  Search,
  Download,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: FolderOpen,
    title: 'Auto-organize',
    description:
      'Your notes sort themselves into Topics and Subtopics as you write. No folders to pick, no templates to set up.',
  },
  {
    icon: Tags,
    title: 'Smart tags',
    description:
      'Suggested tags appear contextually; one click to apply. Find related notes without lifting a finger.',
  },
  {
    icon: Link2,
    title: 'Connect ideas',
    description:
      'Notes that mention the same thing link to each other automatically. Your knowledge graph builds itself.',
  },
  {
    icon: Sunrise,
    title: "Today's Focus",
    description:
      'A daily digest of the 3 notes most worth reopening. Start each day knowing exactly where to pick up.',
  },
  {
    icon: Search,
    title: 'Search that thinks',
    description:
      'Ask in plain English: "what did Sarah say about pricing?" — no Boolean, no keyword guessing.',
  },
  {
    icon: Download,
    title: 'Yours to keep',
    description:
      'Export to Markdown, Notion, or plain text anytime. Your notes are never locked in.',
  },
];

export default function FeaturesGrid() {
  return (
    <Section id="features">
      <Container>
        <div className="text-center mb-12">
          <Eyebrow className="mb-4">What ClearNotes does</Eyebrow>
          <h2 className="font-heading font-700 text-3xl md:text-[40px] leading-tight tracking-tight text-ink mb-4">
            Everything a second brain should do &mdash; nothing it shouldn&apos;t.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              className={`reveal reveal-delay-${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
