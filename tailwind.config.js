/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        black: '#29303a',
        containerBg: 'rgb(38 38 53)',
      },
    },
  },
  plugins: [],
};


