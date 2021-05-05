const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegray: colors.blueGray,
      },
      width: {
        "28r": "28rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
