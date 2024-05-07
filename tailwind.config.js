/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  // content: [],
  content: ["./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}","index.html"],
  theme: {
    extend: {
      colors: {
        "bg-primary" : "#6A737C",
        // "nav-links" : "#08a5c9",
        "nav-links" : "#006CFF",
        "nav-links-light" : "#65CCE5",
        "nav-links-hover" : "#5A73E6",
      },
      backgroundImage: {
        svg1 : "./src/assests/svg3.svg"
      }
    },
  },
  plugins: [],
}

