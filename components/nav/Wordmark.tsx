import OrbitMark from '@/components/orbit/OrbitMark';

interface WordmarkProps {
  className?: string;
}

export default function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <a href="/" className={`inline-flex items-center gap-2 ${className}`}>
      <OrbitMark size={28} />
      <span className="font-heading font-bold text-lg text-ink tracking-tight">
        ClearNotes
      </span>
    </a>
  );
}
