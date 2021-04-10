const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      blue: colors.blue,
      blueGray: colors.blueGray,
      lime: colors.lime,
      yellow: colors.yellow,
      red: colors.red,
      white: colors.white,
      transparent: 'transparent'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
