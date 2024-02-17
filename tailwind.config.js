/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('./src/assets/image/pattern.jpg')",
      },
      fontSize: {
        "8.1xl": "110px",
      },
      fontFamily: {
        rowdies: "Rowdies",
      },
      colors: {
        "clr-1": "#294B29",
        "clr-2": "#50623A",
        "clr-3": "#789461",
        "clr-4": "#DBE7C9",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
