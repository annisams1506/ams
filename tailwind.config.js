/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        bebas: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
        comic: ['"Comic Sans MS"', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
