module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringColor: ["hover", "active", "focus"],
      backgroundColor: ["hover", "disabled"],
    },
  },
  plugins: [],
};
