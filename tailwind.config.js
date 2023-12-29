/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
        'width': 'width'
      },
      colors: {
        'primary': {
          '50': '#f6f5fd',
          '100': '#efedfa',
          '200': '#e0ddf7',
          '300': '#c9c1f1',
          '400': '#ad9ee7',
          '500': '#9176dc',
          '600': '#8059ce',
          '700': '#7046bb',
          '800': '#5e3a9d',
          '850': '#56368F',
          '900': '#4d3280',
          '950': '#392466',
        },
        'secondary': {
          '50': '#eefffa',
          '100': '#c6fff2',
          '200': '#8dffe5',
          '300': '#4bfdd6',
          '400': '#1eebc5',
          '500': '#00ceab',
          '600': '#00a68d',
          '700': '#018472',
          '800': '#07685c',
          '900': '#0b564d',
          '950': '#003530',
        },
        'neutral': {
          '50': '#f6f6f7',
          '100': '#efeff0',
          '200': '#e1e1e4',
          '300': '#d0cfd2',
          '400': '#b4b2b8',
          '500': '#aaa7ad',
          '600': '#959299',
          '700': '#817e84',
          '800': '#69676c',
          '900': '#575659',
          '950': '#333234',
        },      
      }
    },
  },
  plugins: [],
}

