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
        // Accent: Lime Green (#D4A437) — fresh, creative, modern
        accent: {
          50:  '#FAF7F0',
          100: '#F5F0E5',
          200: '#F5C76A',
          300: '#D4A437',  // ← your primary accent
          400: '#F5C76A',
          500: '#A87C1F',
          600: '#8A641A',
          700: '#6E5015',
        },
        ink: {
          950: '#0A0A0A', // deep black (background)
          900: '#14110D',
          800: '#1C1811',
          700: '#241E14',
          600: '#2E2618',
        },
        cream: {
          50:  '#F5F0E5', // off-white (text on dark)
          100: '#E4DCCB',
          200: '#C2B7A0',
        },
        muted: {
          DEFAULT: 'rgba(245,240,229,0.55)',
          soft:    'rgba(245,240,229,0.35)',
          line:    'rgba(245,240,229,0.10)',
        },
      },
      fontFamily: {
        // Display: Syne — geometric, bold, award-winning-agency vibe
        display: ['var(--font-display)', 'Fraunces', 'Georgia', 'serif'],
        // Body: DM Sans — clean, modern, highly legible
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
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