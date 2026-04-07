/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page:    "var(--color-bg)",
        surface: "var(--color-surface)",
        line:    "var(--color-line)",
        ink:     "var(--color-ink)",
        muted:   "var(--color-muted)",
        accent:  "var(--color-accent)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
        'float-dust': 'floatDust 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
