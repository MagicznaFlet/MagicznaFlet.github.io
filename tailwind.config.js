/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        primary: "rgba(var(--primary))",
        horizontalRule: "rgba(var(--horizontal-rule))",
        special: "rgb(var(--special))",
        fill: "rgba(var(--fill))",
        link: "rgb(var(--link))",

      }
    },
  },
  plugins: [],
}

