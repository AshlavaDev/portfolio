/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    colors: {
      'burgundy': '#62004b',
      'cream': '#f4e4c8',
      'dark-grey': '#030712'
    },
    fontFamily: {
      'alegreya': ['Alegreya', 'Tahoma', 'Verdana', 'sans-serif'],
      'offside': ['Offside', 'Brush Script MT', 'serif', 'cursive'],
    },
  },
  plugins: [],
}
