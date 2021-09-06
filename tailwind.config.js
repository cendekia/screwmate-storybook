module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      screens: {
        '3xl': '1536px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
