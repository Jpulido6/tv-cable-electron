// tailwind.config.js

import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-regular": ["Poppins-Regular", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],
        "poppins-thin": ["Poppins-Thin", "sans-serif"],
      },
      animation: {
        "fadeInOut": "1.5s easy-in-out infinite",
      },
      keyframes: {
        "fadeInOut": {
          "0%": { opacity: 0 },
          "100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
