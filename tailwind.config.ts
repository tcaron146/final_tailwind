/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        btns: "rgb(var(--color-btns) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        bkg2: "rgb(var(--color-bkg2) / <alpha-value>)",
        btnText: "rgb(var(--color-btnText) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        highlights: "rgb(var(--color-highlights) / <alpha-value>)",
        input: "rgb(var(--color-input) / <alpha-value>)",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};