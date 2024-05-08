/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.js",
    
  ],
  theme: {
    extend: {
      fontFamily:{
        'Kimberley':['"Kimberley"','sans-serif'],
        'montserrat':['"Montserrat"','sans-serif'],
        'bakbak-one': ['Bakbak One', 'system-ui'],

      },
      colors:{
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)", 
        "dark-grayish-blue":"hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red":" hsl(13, 100%, 96%)",
        "vary-light-gray":" hsl(0, 0%, 98%)",
        "white":"hsl(200, 100%, 99%)",
        "black":"hsl(216, 29%, 13%)",
        "ligth-gray":"hsl(0, 0%, 81%)",
        "light-blue":"hsl(212.586, 46%, 50%)",
        "dark-blue-2":"hsl(214.054, 100%, 29%)"

      },
      backgroundImage:{
        "close-menu":"url('../images/icon-close.svg')",
        "open-menu":"url('../images/icon-hamburger.svg')",
      }

    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin'),
    
  ],
}

