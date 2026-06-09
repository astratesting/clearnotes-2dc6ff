interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honey/20 text-ink text-sm font-medium font-body ${className}`}
    >
      {children}
    </span>
  );
}
