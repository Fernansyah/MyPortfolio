/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0e7490",
        dua: "#164e63",
        tiga: "#74321B",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
