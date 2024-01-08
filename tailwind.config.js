/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'start-color': 'var(--start-color)',
        'end-color': 'var(--end-color)',
      },
      gradientColorStops: {
        'start-color': 'var(--start-color)',
        'end-color': 'var(--end-color)',
      },
    },
  },
  plugins: [],
}