/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#1a2e4a',
          'navy-dark': '#0f1d33',
          blue: '#2c5aa0',
          'blue-light': '#3b6cb5',
          red: '#8b2332',
          'red-light': '#a42d3f',
          gray: '#f5f3f0',
          'gray-warm': '#e8e4df',
          'gray-dark': '#4a4a4a',
        },
      },
      fontFamily: {
        heading: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
