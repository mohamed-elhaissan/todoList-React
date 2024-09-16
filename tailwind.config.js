/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty : {
        'mainTransition' : 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
}

