/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Archivo", "sans-serif"],
        title: ["Poppins", "serif"],
        title: ["Open Sans", "sans-serif"],
        title: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}

