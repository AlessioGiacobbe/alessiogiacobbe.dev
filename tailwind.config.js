/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "panna":        "#FEF8EE",
        "panna-2":      "#FAE4B0",
        "panna-border": "#C9903A",
        "ink":          "#1E120A",
        "ink-muted":    "#8C6239",
      },
    },
  },
  plugins: [],
  safelist: ['w-72'],
}
