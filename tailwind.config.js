/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100': '26rem',
        '110': '28rem',
        '128': '32rem',
      },
      blur: {
        "4xl": '80px',
      },
      margin: {
        '16': '3.5rem',
        '20': '4.5rem',
      },
      borderRadius: {
        '4xl': '1.875rem'
      },
      colors: {
        "cool-blue" : "#38bdf8",
        "cool-indaco" : "#A0B6FD"
      },
      boxShadow: {
        "cool-white-border" : "rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset",
        "cool-purple-border" : "#9575CDCC 0px 0px 0px 0.5px inset",
        "cool-white-border-and-shadow" : "rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset, #9575CD40 0px 0px 20px",
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
