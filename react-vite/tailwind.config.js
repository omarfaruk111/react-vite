/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '575px'},
      // => @media (max-width: 639px) { ... }
    },
    
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

