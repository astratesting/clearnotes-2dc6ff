/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
        },
        violet: {
          DEFAULT: 'var(--violet)',
          soft: 'var(--violet-soft)',
        },
        coral: {
          DEFAULT: 'var(--coral)',
          soft: 'var(--coral-soft)',
        },
        honey: 'var(--honey)',
        cream: {
          DEFAULT: 'var(--cream)',
          2: 'var(--cream-2)',
        },
        line: 'var(--line)',
        success: 'var(--success)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        heading: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-source-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(31,21,53,.04), 0 8px 24px rgba(124,58,237,.06)',
      },
      maxWidth: {
        content: '1200px',
        wide: '1280px',
        nav: '1120px',
      },
      spacing: {
        'section-y': '96px',
        'section-y-mobile': '64px',
      },
    },
  },
  plugins: [],
};
