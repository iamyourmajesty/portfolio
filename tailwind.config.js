/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors : {
      bgColor : '#01111a',
      white : '#FFFFFF',
      yellow : '#ffff00'
    },
    fontFamily : {
      logoFont : ['Permanent Marker','cursive'],
    },
    extend: {
      backgroundImage : {
        'night-sky-background' : "url('./Images/beautiful-shining-stars-night-sky.jpg')"
      }
    },
  },
  plugins: [],
}

 