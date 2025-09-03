/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.stories.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#ff0844",
        white: "#fbfbfb",
        light: "#efefef",
        "light-gray": "#a6a6b5",
        gray: "#878791",
        "dark-gray": "#484753",
        black: "#1e1e29",
        red: "#ff0844",
        "red-light": "#ff3869",
        orange: "#ff8c69",
        "orange-light": "#ffb199",
        purple: "#6b42df",
        "purple-light": "#987aef",
        blue: "#6bb5f9",
        dark: {
          main: "#ff3869",
          background: "#121218",
          surface: "#1e1e29",
          text: "#fbfbfb",
          "text-secondary": "#a6a6b5",
          border: "#484753",
          accent: "#987aef",
        },
      },
      fontFamily: {
        sans: ["Eudoxus Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
