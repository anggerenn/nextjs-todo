const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    width: {
      "28r": "28rem",
    },
    extend: {
      colors: {
        bluegray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
