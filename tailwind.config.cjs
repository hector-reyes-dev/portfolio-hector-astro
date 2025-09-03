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
        // Using CSS custom properties for better token management
        main: "var(--color-main)",
        white: "var(--color-white)",
        light: "var(--color-light)",
        "light-gray": "var(--color-light-gray)",
        gray: "var(--color-gray)",
        "dark-gray": "var(--color-dark-gray)",
        black: "var(--color-black)",
        red: "var(--color-red)",
        "red-light": "var(--color-red-light)",
        orange: "var(--color-orange)",
        "orange-light": "var(--color-orange-light)",
        purple: "var(--color-purple)",
        "purple-light": "var(--color-purple-light)",
        blue: "var(--color-blue)",
        // Dark theme colors (automatically handled by CSS custom properties)
        dark: {
          main: "var(--color-main)", // Changes automatically in dark mode
          background: "var(--color-background)",
          surface: "var(--color-surface)",
          text: "var(--color-text)",
          "text-secondary": "var(--color-text-secondary)",
          border: "var(--color-border)",
          accent: "var(--color-accent)",
        },
      },
      fontFamily: {
        sans: ["var(--font-family-sans)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
      },
      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        main: "var(--shadow-main)",
        "main-hover": "var(--shadow-main-hover)",
        purple: "var(--shadow-purple)",
        "purple-hover": "var(--shadow-purple-hover)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        normal: "var(--transition-normal)",
        slow: "var(--transition-slow)",
      },
      lineHeight: {
        tight: "var(--line-height-tight)",
        snug: "var(--line-height-snug)",
        normal: "var(--line-height-normal)",
        relaxed: "var(--line-height-relaxed)",
        loose: "var(--line-height-loose)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
