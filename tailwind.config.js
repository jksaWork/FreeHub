/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          200: '#fde68a',
          300: '#fcd34d',
          400: '#de8f36',
          500: '#de8f36',
          600: '#d97706',
        },
        purple: {
          custom: '#a400d1',
        },
      },
    },
  },
  plugins: [],
};


