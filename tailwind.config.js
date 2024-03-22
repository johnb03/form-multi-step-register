/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.html" , "index.html", "js"],
    theme: {
      extend: {},

      colors: {
        'purpleDark':"#652CD1",
        'purpleLight': "#845EEE",
        'dark': "#121826",
        'darkLight':"#212936",
        'grey1':"#394150",
        'grey2':"#4D5562",
        'greyLight': "#A1A1A9",
       'whiteColor':"#E5E7EB",
       'transparnte':"rgb(0,0,0,0)"
      },



      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
    },
   
    
    plugins: [],


  }