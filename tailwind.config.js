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
      'f7f5f2': '#f7f5f2',
      'f4eae4': '#f4eae4',
      // '341924': '#341924',
      // 'dec0ae': '#dec0ae',
      'F0EFF2': '#F0EFF2',
      'F1F1F0': "#F1F1F0"
      
    },},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  variants: {
    display: ["group-hover"],
  }
}

