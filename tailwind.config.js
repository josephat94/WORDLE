module.exports = {
  mode:"jit",
  darkMode: 'class',
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
        'empty-box': "rgba(147, 155, 159, 0.3)",
        'modal': "rgba(243, 243, 243, 0.89);",
        'modal-dark': "rgba(38, 43, 60, 0.89)",
        'dark-bg': "rgba(38, 43, 60, 0.89)",
        'top':"#F3F3F3",
        'top-dark': "rgba(218, 220, 224, 0.03)",
        'color-top':'#202537',
        'color-top-dark':'#DADCE0',
        'modal-ctn':'rgba(243, 243, 243, 0.89)',
        'modal-ctn-dark':'#262B3C', 
        'key': '#D3D6DA',
        'key-dark':"#565F7E",
        'key-text': "#56575E",
        'keyboard': '#EFF0F1',
        'keyboard-dark': '#323646',

      }
    },
  },
  plugins: [],
}
