/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans' : ['Franklin Gothic Medium','Arial Narrow','sans-serif'],
      'geneva' : ['Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode','Geneva','Verdana','sans-serif'],
      'arial' : ['Franklin Gothic Medium','Arial Narrow','Arial','sans-serif'],
      'roboto' : 'Roboto'
    },
    extend: {},
  },
  plugins: [],
}
