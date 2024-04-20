/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors : 
      {
        'blue-solid' : "#323F73"
      }},
  },
  plugins: [],
}
