/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Edu VIC WA NT Beginner", "cursive"],
        body: ["Kode Mono", "monospace"],
      },
    },
  },
  plugins: [],
}