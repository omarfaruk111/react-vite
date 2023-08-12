/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,json}"
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
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, #12042c, #380d5a)",
        'gradient-236': 'linear-gradient(236deg, var(--tw-gradient-stops))'
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#f2ff49',
        'secondary': '#001219',
        'hover':'#2A9D8F',
        'gradientColor1':'#5B5FDC',
        'gradientColor2':'#A756F8',
        'gradientColor3':'#000000d9',
        'gradientColor4':'#00000070',
        'subTColor':'#a51edd',
        'bgColor2':'#1D3557',
      },
      fontFamily: {
        oswald: ['Oswald'],
        rubik: ['Rubik'],
      }
    },
  },
  plugins: [require("daisyui")],
}

