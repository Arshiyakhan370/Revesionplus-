/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx",],
  theme: {
    extend: {
      boxShadow: {
        'myShadow': '-1px 0px 5px 2.5px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

