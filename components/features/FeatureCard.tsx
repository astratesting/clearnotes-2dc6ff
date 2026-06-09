import { type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon: IconComponent,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`p-5 rounded-2xl border border-line bg-white shadow-card hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-violet-soft flex items-center justify-center mb-4">
        <IconComponent
          size={20}
          strokeWidth={1.75}
          className="text-violet"
        />
      </div>
      <h3 className="font-heading font-semibold text-lg text-ink mb-2">
        {title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
    </div>
  );
}
