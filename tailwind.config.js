/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "60rem",
      },
      colors: {
        paper:         "var(--color-paper)",
        'paper-2':     "var(--color-paper-2)",
        rule:          "var(--color-rule)",
        ink:           "var(--color-ink)",
        'ink-2':       "var(--color-ink-2)",
        muted:         "var(--color-muted)",
        accent:        "var(--color-accent)",
      },
      fontSize: {
        display: "var(--text-display)",
        section: "var(--text-section)",
        title:   "var(--text-title)",
        lead:    "var(--text-lead)",
      },
    },
  },
  // .container comes from globals.css; Tailwind's own would cap it per breakpoint
  corePlugins: {
    container: false,
  },
  plugins: [],
}
