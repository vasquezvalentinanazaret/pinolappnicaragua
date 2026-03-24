/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A651",
        secondary: "#E30613",
        background: "#F5F5F5",
        text: "#333333",
      },
      fontFamily: {
        sans: ["System"],
      },
    },
  },
  plugins: [],
};
