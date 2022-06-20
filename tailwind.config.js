/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      blur: {
        "4xl": '80px',
      },
      margin: {
        '16': '3.5rem',
        '20': '4.5rem',
      },
      colors: {
        "cool-blue" : "#38bdf8",
        "cool-indaco" : "#A0B6FD"
      },
      boxShadow: {
        "cool-white-border" : "rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset",
        "cool-purple-border" : "#9575CDCC 0px 0px 0px 0.5px inset" 
      },
      keyframes: {
        vibeLeft: {
          '0%, 100%': { left: '20%' },
          '50%': { left: '10%' },
        },
        vibeRight: {
          '0%, 100%': { right: '50%' },
          '50%': { right: '60%' },
        }
      },
    },
  },
  plugins: [],
}
