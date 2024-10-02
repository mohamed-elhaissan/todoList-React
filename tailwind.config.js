/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        custom : '0px 10px 30px rgba(0,0,0,.1)'
      },
      transitionProperty : {
        'mainTransition' : 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
  darkMode : "class",
}

