import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ===== Brand palette =====
        // Inspired by nk.studio's bold black + accent treatment
        // Accent: Lime Green (#BEF264) — fresh, creative, modern
        accent: {
          50:  '#F7FEE7',
          100: '#ECFCCB',
          200: '#D9F99D',
          300: '#BEF264',  // ← your primary accent
          400: '#A3E635',
          500: '#84CC16',
          600: '#65A30D',
          700: '#4D7C0F',
        },
        ink: {
          950: '#07070A', // deep black (background)
          900: '#0A0A0F',
          800: '#111118',
          700: '#1C1C24',
          600: '#2A2A33',
        },
        cream: {
          50:  '#F5F5F2', // off-white (text on dark)
          100: '#E6E6E0',
          200: '#C9C9C2',
        },
        muted: {
          DEFAULT: 'rgba(245,245,242,0.55)',
          soft:    'rgba(245,245,242,0.35)',
          line:    'rgba(245,245,242,0.10)',
        },
      },
      fontFamily: {
        // Display: Syne — geometric, bold, award-winning-agency vibe
        display: ['var(--font-display)', 'Syne', 'system-ui', 'sans-serif'],
        // Body: DM Sans — clean, modern, highly legible
        sans: ['var(--font-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Display sizes for huge hero typography (nk.studio style)
        'display-xl': ['clamp(3.5rem, 9vw, 9rem)',   { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 6rem)',   { lineHeight: '1.0',  letterSpacing: '-0.035em' }],
        'display-md': ['clamp(2rem,   4vw, 4rem)',   { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)',{ lineHeight: '1.1',  letterSpacing: '-0.025em' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
      },
      animation: {
        'fade-in':  'fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'marquee':  'marquee 30s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;