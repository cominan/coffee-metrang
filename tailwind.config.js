/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      bo: '#dee2e6',
      bl: '#333',
      b: '#fff',
      primary: '#7c0f12',
      secondary: '#cfc9c9',
      third: '#f53127',
      dark: '#000000',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',

    },
    screens: {
      'mb': '350px',
      // => @media (min-width : 350px) { ... }
      'tb': '640px',
      // => @media (min-width: 640px) { ... }

      'lp': '1024px',
      // => @media (min-width: 1024px) { ... }

      'dp': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
    fontWeight: {
      m: 500,
      l: 700
    },
    lineHeight: {
      t: '1.3rem'
    },
    fontSize: {
      sm: '0.8rem',
      t: '.9rem',
      w: '1.2rem',
      icon: '1.4rem',
      x: '1.5rem',
      xl: '2rem',
      social: '2.2rem',
      '2xl': '2.5rem'
    }
  },
  plugins: [],

}
