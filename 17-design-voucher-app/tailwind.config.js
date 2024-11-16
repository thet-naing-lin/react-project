/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        header: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
