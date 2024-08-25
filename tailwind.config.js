/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8e3cbe',
        secondary: '#4d1e67',
        accent: '#69258e',
        text: '#f9f4fb',
        background: '#030104',
      },
    },
  },
  plugins: [],
}
