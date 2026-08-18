/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17171F',
        paper: '#FAF9F6',
        violet: {
          DEFAULT: '#4C1D95',
          light: '#6D28D9',
          pale: '#EDE9FE',
        },
        amber: {
          DEFAULT: '#F5A623',
          dark: '#C9820A',
        },
        slate: {
          DEFAULT: '#6B7280',
        },
        success: '#15803D',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #17171F0d 1px, transparent 1px), linear-gradient(to bottom, #17171F0d 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
    },
  },
  plugins: [],
}
