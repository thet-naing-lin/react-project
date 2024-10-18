/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Kode Mono", "system-ui"],
        body: ["Edu VIC WA NT Beginner", "system-ui"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("preline/plugin")],
};
