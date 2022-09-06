/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "100px",
        tablet: "600px",
        pc: "1100px",
      },
      fontFamily: {
        sans: "Raleway, sans-serif",
      },
      colors: {
        purple: {
          500: "#7630de",
        },
        blue: {
          500: "#006dca",
        },
        red: {
          500: "#ea5252",
        },
        black: {
          500: "#383336",
        },
        yellow: {
          500: "#eac852",
        },
        gray: {
          100: "#fbfbfd",
        },
      },
    },
  },
  plugins: [],
};
