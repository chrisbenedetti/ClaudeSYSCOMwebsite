/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#FAFAF7',
          cream: '#F5F0E8',
          card: '#FFFFFF',
          border: '#E5DDD0',
          light: '#F7F4EE',
        },
        navy: '#1E3A5F',
        'navy-dark': '#152D4A',
        teal: '#2E7D6F',
        'teal-light': '#369284',
        terracotta: '#B85C38',
        gold: '#C4973B',
        sage: '#7A9E7E',
        slate: '#4A5568',
        'warm-brown': '#8B7355',
        text: '#2D3748',
        muted: '#718096',
      },
      fontFamily: {
        heading: ['Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      borderRadius: {
        warm: '14px',
      },
    },
  },
  plugins: [],
};
