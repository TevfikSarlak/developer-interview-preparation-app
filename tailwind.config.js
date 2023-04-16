/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        "grayishBlue": "#3d5a80",
        "lightBlue": "#98c1d9",
        "lightCyan": "#edf2f4",
        "lightRed": "#ee6c4d",
        "darkBlue": "#293241"

      },
    },
  },
  plugins: [],
}

