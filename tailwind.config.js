/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  backgroundColor: {
      // 'e8e6df': '#e8e6df',
      'f7f5f2': '#f7f5f2'
    },},
  },
  plugins: [],
  variants: {
    display: ["group-hover"],
  }
}

