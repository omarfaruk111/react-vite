/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark': '#0B0C0E',
      'green': '#08d665',
      'metal': '#565584',
    },
    extend: {
      fontFamily: {
        oswald: ['Oswald'],
        rubik: ['Rubik'],
      }
    },
  },
  plugins: [],
}

