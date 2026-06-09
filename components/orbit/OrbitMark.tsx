interface OrbitMarkProps {
  size?: number;
  className?: string;
}

export default function OrbitMark({ size = 32, className = '' }: OrbitMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ClearNotes Orbit mark"
    >
      {/* Center dot */}
      <circle cx="16" cy="16" r="3.5" fill="var(--violet)" />
      {/* Outer ring */}
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="13"
        stroke="var(--violet)"
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* Middle ring */}
      <ellipse
        cx="16"
        cy="16"
        rx="9"
        ry="9"
        stroke="var(--violet)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Inner ring */}
      <ellipse
        cx="16"
        cy="16"
        rx="5.5"
        ry="5.5"
        stroke="var(--violet)"
        strokeWidth="1.5"
        opacity="0.7"
      />
      {/* Coral dot on outer ring */}
      <circle cx="29" cy="16" r="2" fill="var(--coral)" />
    </svg>
  );
}
