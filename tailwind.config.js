module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'yekan-regular': ['IRANYekanRegular'],
        'yekan-thin': ['IRANYekanThin'],
        'yekan-light': ['IRANYekanLight'],
        'yekan-bold': ['IRANYekanBold']
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
  },
  plugins: [],
}