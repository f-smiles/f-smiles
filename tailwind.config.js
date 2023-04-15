/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {  backgroundColor: {
      // 'e8e6df': '#e8e6df',
      'f7f5f2': '#f7f5f2'
    },},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  variants: {
    display: ["group-hover"],
  }
}

