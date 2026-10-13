/**
 * Levo Design Tokens (Afro-Boutique Vitality)
 * Grounded in Stitch design.md specifications
 */

export const colors = {
  brand: {
    green: '#6ca80d',
    greenBright: '#78ba12',
    greenDark: '#436700',
    terra: '#e0731a',
    terraDark: '#c25e10',
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
    borderLight: '#363f33',
    text: '#f5f6f2',
    muted: '#9da496',
    subtle: '#232820',
  },
} as const;

export const typography = {
  fonts: {
    display: 'Sora, sans-serif',
    headline: 'Plus Jakarta Sans, sans-serif',
    body: 'DM Sans, sans-serif',
    mono: 'Space Mono, monospace',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
