/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: "class",
  relative: true,
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        main: "#067aff",
        transparent: 'transparent',
        current: 'currentColor'
      }
    },
  },
  plugins: [],
}