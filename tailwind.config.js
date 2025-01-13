/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "96rem",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
