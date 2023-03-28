/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#01606F",
        secondary: "#96D1CF",
      }),
      textColor: (theme) => ({
        primary: "#01606F",
        secondary: "#96D1CF",
      }),
      borderColor: (theme) => ({
        primary: "#01606F",
        secondary: "#96D1CF",
      }),
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
      },
    },
    screens: {
      //min-width's
      xs: "500px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
