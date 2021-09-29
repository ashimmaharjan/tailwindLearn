module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Nunito'],
        cursive: ['Berkshire Swash']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
