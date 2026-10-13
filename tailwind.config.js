/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#6ca80d',
          'green-bright': '#78ba12',
          'green-dark': '#436700',
          terra: '#e0731a',
          'terra-dark': '#c25e10',
          gold: '#f0b429',
          dark: '#121411',
          surface: '#FBFBFA',
          card: '#FFFFFF',
          border: '#E8E6E1',
          muted: '#68655E',
          subtle: '#F4F2ED',
        },
        dark: {
          bg: '#0c0e0b',
          surface: '#121411',
          card: '#161914',
          elevated: '#1c201a',
          highest: '#232820',
          border: '#282f25',
          'border-light': '#363f33',
          text: '#f5f6f2',
          muted: '#9da496',
          subtle: '#232820',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0px 2px 8px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px -0.5px rgba(202, 102, 20, 0.02)',
        'dark-subtle': '0px 2px 10px rgba(0, 0, 0, 0.35)',
        card: '0px 10px 30px -10px rgba(0, 0, 0, 0.06)',
        'dark-card': '0px 12px 32px -10px rgba(0, 0, 0, 0.6)',
        phone: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
