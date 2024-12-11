/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{html,js}",
    "./scripts/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brown: {
          600: '#8D6E63',
          700: '#795548',
          800: '#6D4C41',
          900: '#5D4037',
        },
        cream: {
          100: '#FFFBF5',
          200: '#FFF3E0',
          300: '#FFE0B2',
        },
      },
    },
  },
  plugins: [],
}

