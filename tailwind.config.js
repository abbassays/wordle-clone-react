/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'correct': '#538D4E',
        'wrong': '#3A3A3C',
        'almost': '#B59F3B',
        'neutral': '#818384',
      },
    },
  },
  plugins: [],
}
