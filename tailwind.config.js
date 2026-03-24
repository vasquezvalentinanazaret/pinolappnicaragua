/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pinolGreen: "#00A651",
        pinolRed: "#E30613",
      },
    },
  },
  plugins: [],
}
