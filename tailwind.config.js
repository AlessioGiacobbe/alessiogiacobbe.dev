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
      colors: {
        "cool-blue" : "#38bdf8",
        "cool-indaco" : "#A0B6FD"
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
