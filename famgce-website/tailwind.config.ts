import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          brand:  '#6DBE2E',
          dark:   '#4E8F1F',
          light:  '#8FD94A',
        },
        dark: {
          DEFAULT: '#0D0D0D',
          2: '#111111',
          3: '#1A1A1A',
          4: '#222222',
        },
        light: {
          DEFAULT: '#F8F9FA',
          2: '#F1F3F5',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
