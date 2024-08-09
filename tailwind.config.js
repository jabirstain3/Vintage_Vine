/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A1C398',
        'secondary': '#FEFDED',
        'action':'#FA7070',
        'base':'#C6EBC5'
      },
    }
  },
  plugins: [],
}

