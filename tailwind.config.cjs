/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#ff0844",
        white: "#fbfbfb",
        "light-gray": "#efefef",
        gray: "#9796a3",
        "dark-gray": "#484753",
        black: "#1e1e29",
        red: "#ff0844",
        "red-light": "#ff537d",
        orange: "#ff8c69",
        "orange-light": "#ffb199",
        purple: "#6b42df",
        "purple-light": "#987aef",
        blue: "#6bb5f9",
      },
      fontFamily: {
        sans: ["Instrument Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
