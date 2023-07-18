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
    //background-image: linear-gradient( 110.1deg,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% );
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(93, 108, 176, 0.9), rgba(13, 108, 176, 0.9))",
      },
      // backgroundImage: {
      //   'gradient-24': 'linear-gradient(24deg, var(--tw-gradient-stops))',
      //   'gradient-50': 'linear-gradient(50deg, var(--tw-gradient-stops))',
      //   'gradient-90': 'linear-gradient(90deg, var(--tw-gradient-stops))',
      //   'gradient-110': 'linear-gradient(110deg, var(--tw-gradient-stops))',
      //   'gradient-120': 'linear-gradient(120deg, var(--tw-gradient-stops))',
      //   'gradient-155': 'linear-gradient(155deg, var(--tw-gradient-stops))',

      // },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#f2ff49',
        'secondary': '#F4A261',
        'hover':'#2A9D8F',
        'bgColor':'',
        'gradientColor1':'rgba(30,2,83,1.4)',
        'gradientColor2':'rgba(198,55,160,0.8)',
        'gradientColor3':'',
        'bgColor1':'#023047',
        'bgColor2':'#1D3557',
      },
      fontFamily: {
        oswald: ['Oswald'],
        rubik: ['Rubik'],
      }
    },
  },
  plugins: [],
}

