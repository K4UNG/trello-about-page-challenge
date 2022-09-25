/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        md: "990px",
      },
      fontFamily: {
        body: ["Merriweather Sans", "sans-serif"],
      },
      colors: {
        blue: {
          light: "rgb(0, 101, 255)",
          medium: "rgb(0, 62, 205)",
          dull: "rgb(23, 43, 77)",
          dark: "rgb(9, 30, 66)",
        },
        green: {
          light: "rgb(230, 252, 255)",
          bright: "rgb(0, 184, 217)",
        },
      },
    },
  },
  plugins: [],
};
