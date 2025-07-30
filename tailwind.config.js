// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add 'Inter' to your Tailwind font family
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
