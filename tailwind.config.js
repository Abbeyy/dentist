/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#01606F",
      }),
      textColor: (theme) => ({
        primary: "#01606F",
      }),
      borderColor: (theme) => ({
        primary: "#01606F",
      }),
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
