/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'white-deep': '#999999',
        'dark': '#0B0C0E',
        'dark-light': '#131617',
        'green': '#08d665',
        'metal': '#565584',
      },
      fontFamily: {
        oswald: ['Oswald'],
        rubik: ['Rubik'],
      }
    },
  },
  plugins: [],
}

