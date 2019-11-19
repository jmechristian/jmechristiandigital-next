const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  theme: {
    container: {
      center: true
    },
    zIndex: {
      '-1': '-1'
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#090E24',
        secondary: '#ed4010',
        highlight: '#0fba9e',
        lowlight: '#0da2db'
      }
    }
  },
  variants: {},
  plugins: []
};
