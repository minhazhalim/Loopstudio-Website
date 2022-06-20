/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      small: '480px',
      medium: '768px',
      large: '976px',
      extraLarge: '1440px',
    },
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans','sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
}