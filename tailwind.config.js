module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],       
      },
      colors:{
        'green-box': '#6AAA64',
        'white':'#FFFFFF',
        'yellow-box':'#CEB02C',
        'gray-box':'#939B9F',
        'empty-box': "rgba(147, 155, 159, 0.3)"
      }
    },
  },
  plugins: [],
}
