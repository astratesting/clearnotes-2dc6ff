interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'cream' | 'cream-2' | 'transparent';
}

export default function Section({
  children,
  className = '',
  id,
  bg = 'transparent',
}: SectionProps) {
  const bgClasses = {
    cream: 'bg-cream',
    'cream-2': 'bg-cream-2',
    transparent: '',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[bg]} ${className}`}
    >
      {children}
    </section>
  );
}
