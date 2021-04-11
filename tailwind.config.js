const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      black: colors.black,
      blue: colors.blue,
      blueGray: colors.blueGray,
      lime: colors.lime,
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      white: colors.white,
      transparent: 'transparent'
    }
  },
  variants: {
    extend: {
        brightness: ['hover', 'focus'],
    },
  },
  plugins: [],
}
