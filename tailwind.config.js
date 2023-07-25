/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-blue": "#0F3494",
        "midnight": "#2F2F2F",
      },
    },
  },
  plugins: [],
}

