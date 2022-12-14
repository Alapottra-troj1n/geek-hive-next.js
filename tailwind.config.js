/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#B8F64F"
      }
    },
   
    fontFamily: {
      'display': "'Titillium Web'",
      'type': 'Syne'
    }
  },
  plugins: [require("daisyui")],
}
