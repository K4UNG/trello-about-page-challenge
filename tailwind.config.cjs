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
          medium: "rgb(0, 82, 255)",
          dull: "rgb(23, 43, 77)",
          dark: "rgb(9, 30, 66)",
        },
        green: {
          light: "rgb(230, 252, 255)",
        },
      },
    },
  },
  plugins: [],
};
