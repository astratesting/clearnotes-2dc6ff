import { type LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
  'aria-label'?: string;
}

export default function Icon({
  icon: IconComponent,
  size = 20,
  strokeWidth = 1.75,
  className = '',
  'aria-label': ariaLabel,
}: IconProps) {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
    />
  );
}
