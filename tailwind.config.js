/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: { 
      colors: {
        // 'cream': '#fdf3e6',
        'a': '#DED7CC',
        'b': '#D4C6B0',
        'c': '#f0eadd',
        'd': '#EEE4D0',
        'light-brown': 'rgb(212, 198, 176)',
        'oat': '#f6f2ef',
        'linen': '#faf0e6',
        'champagne': '#f7e7ce',
        'cream': '#e8c8b3',
        'light-lavender': '#d4c5ff',
        'seaside-sand': 'rgb(242, 233, 215)',
        'cozy-cottage': 'rgb(237, 225, 201)',
        'oat-straw': 'rgb(211, 196, 167)',
        'euphoric-magenta': 'rgb(127, 87, 109)',
        'wine-not': 'rgb(134, 76, 88)',
        'rumors': 'rgb(116, 66, 69)',
      'B7B19F': "#B7B19F",
      // 'e8e6df': '#e8e6df',
      'f7f5f2': '#f7f5f2',
      'f4eae4': '#f4eae4',
      '#c75b18': '#c75b18',
      '7e3a87':'#7e3a87',
      'F8F6F1':"#F8F6F1",

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
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    // require("daisyui"),
  ],
  darkMode: "class",
  variants: {
    display: ["group-hover"],
  }
}


