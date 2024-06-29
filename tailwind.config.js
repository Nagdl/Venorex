/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      width: {
        'Persen50': '50%',
        'Persen70': '70%',
        'Persen80': '80%',
        'Persen90': '90%',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(51, 51, 51, 1) 25%, rgba(255, 255, 255, 1) 100%)',
      },
      colors: {
        'primary': '#333333',
        'secondary': '#FFFFFF',
        'bluesky': '#E1F4F3',
        'icon': '#706C61',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'xss': '0.68rem',
        '2xss': '0.60rem',
        '3xss': '0.45rem',
        '2sm': ['0.90rem', { lineHeight: '1.35rem' }],
      },
    },
  },
  plugins: [],
};
