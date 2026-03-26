/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050508',
          900: '#0a0a12',
          800: '#12121e',
          700: '#1a1a2a',
          600: '#22222e',
          500: '#2a2a3a',
        },
        cream: {
          100: '#faf8f5',
          200: '#f0ece6',
          300: '#d4d0c8',
          400: '#a8a49c',
        },
        copper: {
          400: '#d4a574',
          500: '#c4935e',
          600: '#b07d45',
          700: '#8e6437',
        },
        gold: {
          400: '#d4b896',
          500: '#c9a87c',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        reveal: 'reveal 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
