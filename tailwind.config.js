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
        main: "#5da2ff",
        transparent: 'transparent',
        current: 'currentColor'
      },
      keyframes: {
        lazy: {
          '0%': { 
            display: 'hidden',
            opacity: '0',
          },
          '100%': {
            display: 'auto',
            opacity: '1',
          },
        },
        fadeInLeft: {
          '0%': { 
            translate: 'translateX(-60%)',
            opacity: '0',
          },
          '100%': {
            translate: 'translate(0)',
            opacity: '1',
          },
        },
        fadeInRight: {
          '0%': { 
            translate: 'translateX(60%)',
            opacity: '0',
          },
          '100%': {
            translate: 'translate(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        "lazy": `lazy 1000ms ease-in-out`,
        "fadeInLeft": `fadeInLeft 1000ms ease-in-out`,
        "fadeInRight": `fadeInRight 1000ms ease-in-out`,
      },
    },
  },
  plugins: [],
}