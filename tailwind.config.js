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
      '#c75b18': '#c75b18',
      // '341924': '#341924',
      'dec0ae': '#dec0ae',
      'BDB5D5': '#BDB5D5',
      'B47EDE': "#B47EDE",
      '8F8EA0': "#8F8EA0",
      'EFEEF4': "#EFEEF4",
      'FAFAF8': "FAFAF8",
      // 'E6E6FA': '#E6E6FA',
      'F0EFF2': '#F0EFF2',
      'F1F1F0': "#F1F1F0",
      'F2F1F6': "#F2F1F6",
      
    },},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  variants: {
    display: ["group-hover"],
  }
}

