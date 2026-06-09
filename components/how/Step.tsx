interface StepProps {
  number: number;
  title: string;
  description: string;
  illustration: React.ReactNode;
  reversed?: boolean;
}

export default function Step({
  number,
  title,
  description,
  illustration,
  reversed = false,
}: StepProps) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        reversed ? 'md:direction-rtl' : ''
      }`}
    >
      <div className={`relative ${reversed ? 'md:order-2 md:text-left' : ''}`}>
        {/* Watermark number */}
        <span
          className="absolute -top-8 -left-4 font-heading font-800 text-[80px] leading-none text-ink/[0.06] select-none pointer-events-none"
          aria-hidden="true"
        >
          {String(number).padStart(2, '0')}
        </span>

        <div className="relative">
          <h3 className="font-heading font-600 text-2xl text-ink mb-3">
            {title}
          </h3>
          <p className="text-ink-muted leading-relaxed max-w-md">
            {description}
          </p>
        </div>
      </div>

      <div
        className={`flex items-center justify-center ${
          reversed ? 'md:order-1' : ''
        }`}
      >
        {illustration}
      </div>
    </div>
  );
}
