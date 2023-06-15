/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundColor: {
      // 'e8e6df': '#e8e6df',
      'f7f5f2': '#f7f5f2',
      'f4eae4': '#f4eae4',
      '#c75b18': '#c75b18',
      '7e3a87':'#7e3a87',

      'dec0ae': '#dec0ae',
      'BDB5D5': '#BDB5D5',
      'B47EDE': "#B47EDE",
      '8F8EA0': "#8F8EA0",
      'EFEEF4': "#EFEEF4",
      'FAFAF8': "FAFAF8",
      'E6E6FA': '#E6E6FA',
      'F0EFF2': '#F0EFF2',
      'F1F1F0': "#F1F1F0",
      'F2F1F6': "#F2F1F6",
      'F2F2F2':"#F2F2F2",
      'd4cdc0':"#d4cdc0",
      'b1a69b':"#b1a69b",
      'f1dfd1':"#f1dfd1",
       'f6f0ea':"#f6f0ea",
       'C7AF97':"#C7AF97",
       'EAE8E1':"#EAE8E1",
       'F8F3F3':"#F8F3F3"




      },
    },
    fontFamily: {
      sans: ['Cera Pro', 'sans-serif'],
      serif: ['Larken', 'serif'],
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  variants: {
    display: ["group-hover"],
  }
}

