module.exports = {
  darkMode: "class",
  content: ["./_layouts/*.html", "./_includes/*.html", "./404.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
