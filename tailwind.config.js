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
        'source-primary': "#663399",
        'source-secondary': "#ec4899",
        'source-tertiary': "#30d5c8",
        'source-neutral': "#bfbfbf",
        'source-neutral-dark': "#262626",
        'purplelil':"#E9E9F3",
        // 'source-tertiary': "#339966",

        'primary0': '#000000',
        'primary10': '#2c0051',
        'primary20': '#470c7a',
        'primary25': '#531d85',
        'primary30': '#5f2b92',
        'primary35': '#6b389e',
        'primary40': '#7845ac',
        'primary50': '#925fc7',
        'primary60': '#ad79e3',
        'primary70': '#c994ff',
        'primary80': '#dcb8ff',
        'primary90': '#f0dbff',
        'primary95': '#f9ecff',
        'primary98': '#fff7fe',
        'primary99': '#fffbff',
        'primary100': '#ffffff',

        'secondary0': '#000000',
        'secondary10': '#3e0022',
        'secondary20': '#640039',
        'secondary25': '#780046',
        'secondary30': '#8c0053',
        'secondary35': '#a20060',
        'secondary40': '#b4136d',
        'secondary50': '#d53587',
        'secondary60': '#f751a1',
        'secondary70': '#ff82b8',
        'secondary80': '#ffb0cd',
        'secondary90': '#ffd9e4',
        'secondary95': '#ffecf1',
        'secondary98': '#fff8f8',
        'secondary99': '#fffbff',
        'secondary100': '#ffffff',

        'tertiary10': "#00201d",
        'tertiary20': "#003733",
        'tertiary25': "#00433f",
        'tertiary30': "#00504a",
        'tertiary35': "#005d57",
        'tertiary40': "#006a63",
        'tertiary50': "#00867d",
        'tertiary60': "#00a298",
        'tertiary70': "#00c0b3",
        'tertiary80': "#3cdccf",
        'tertiary90': "#62f9eb",
        'tertiary95': "#b2fff6",
        'tertiary98': "#e4fffa",
        'tertiary99': "#f2fffc",

      'B7B19F': "#B7B19F",
      // 'e8e6df': '#e8e6df',
      'f7f5f2': '#f7f5f2',
      'f4eae4': '#f4eae4',
      '#c75b18': '#c75b18',
      '7e3a87':'#7e3a87',
      'F8F6F1':"#F8F6F1",
      'E6DDD3':'#E6DDD3',

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
      'cera': ['CeraProRegular', 'sans-serif'],
      'cera-bold': ['CeraProBold', 'sans-serif'],
      'larken': ['Larken', 'serif'],
      'euclidBold': ['EuclidCircularABold', 'sans-serif'],
      'euclidLight': ['EuclidCircularALight', 'sans-serif'],
      'euclidMedium': ['EuclidCircularAMedium', 'sans-serif'],
      'euclidRegular': ['EuclidCircularARegular', 'sans-serif'],
      'euclidSemibold': ['EuclidCircularASemibold', 'sans-serif'],
    },
    animation: {
      blob: "blob 7s infinite",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
  ],
  darkMode: "class",
  variants: {
    display: ["group-hover"],
  }
}


