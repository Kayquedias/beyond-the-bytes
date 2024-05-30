/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/**/*.tsx', './**/*.tsx'],
  theme: {
    extend: {
      colors: {
        dark: '#010100',
      },
      fontFamily: {
        grotesk: ['DINNeuzeitGrotesk LT', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
