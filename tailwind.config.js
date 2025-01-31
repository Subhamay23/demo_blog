/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily:{
        'Raleway': ['Raleway', 'sans-serif']
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}