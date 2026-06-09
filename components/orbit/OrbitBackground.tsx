export default function OrbitBackground({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full orbit-rotate"
        role="img"
        aria-label="Decorative orbit animation"
      >
        {/* Soft violet center glow */}
        <circle cx="200" cy="200" r="60" fill="url(#orbitGlow)" opacity="0.3" />

        {/* Outer ring */}
        <circle
          cx="200"
          cy="200"
          r="170"
          stroke="var(--violet)"
          strokeWidth="1"
          opacity="0.15"
          fill="none"
        />
        {/* Middle ring */}
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="var(--violet)"
          strokeWidth="1"
          opacity="0.2"
          fill="none"
        />
        {/* Inner ring */}
        <circle
          cx="200"
          cy="200"
          r="70"
          stroke="var(--violet)"
          strokeWidth="1"
          opacity="0.25"
          fill="none"
        />

        {/* Coral drifting dot on outer ring */}
        <circle r="4" fill="var(--coral)" opacity="0.6">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M200,30 A170,170 0 1,1 199.99,30"
          />
        </circle>

        <defs>
          <radialGradient id="orbitGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--violet)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
