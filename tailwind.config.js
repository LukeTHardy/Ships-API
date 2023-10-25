/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'aqua': '#00ffff',
      'deep-blue': '#000080',
      'light-blue': '#87ceeb',
      'black': '#000000',
      'gold': '#ffd700',
      'green': 'rgb(69, 161, 69)'
    },
    fontFamily: {
      'sans': ['Graphik', 'sans-serif'],
      'serif': ['Merriweather', 'serif']
    },
    extend: {},
  },
  plugins: [],
}