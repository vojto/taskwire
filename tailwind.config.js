module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    }
  },
  plugins: [],
  purge: {
    content: ["./app/**/*.html.erb"],
  }
}
