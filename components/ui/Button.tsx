type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-violet text-white hover:bg-[#6D28D9] focus-visible:ring-violet shadow-sm',
  secondary:
    'bg-white text-violet border border-violet hover:bg-violet-soft focus-visible:ring-violet',
  ghost:
    'bg-transparent text-ink hover:bg-violet-soft focus-visible:ring-violet',
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-7 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
