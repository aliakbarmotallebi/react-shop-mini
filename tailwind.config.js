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
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}