/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "panna":        "var(--color-panna)",
        "panna-2":      "var(--color-panna-2)",
        "panna-border": "var(--color-panna-border)",
        "ink":          "var(--color-ink)",
        "ink-muted":    "var(--color-ink-muted)",
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.55s ease-out both',
        'float-dust':  'floatDust 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  safelist: ['w-72'],
}
