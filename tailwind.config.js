/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#383838", // User Dark Grey
        surface: "#4a4a4a", // Lighter Grey
        primary: "#A8404B", // User Red
        secondary: "#EBC073", // User Yellow
        text: {
          main: "#ffffff",
          muted: "#cccccc",
        },
        // Override default palettes to apply theme globally
        blue: {
          400: "#c55e69",
          500: "#A8404B", // Primary User Red
          600: "#8F323C", // Darker User Red
          700: "#75252E",
        },
        slate: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#4a4a4a", // Surface Grey
          800: "#383838", // Background Grey (swapped for preference or kept distinct)
          900: "#2D2D2D", // Deepest Grey
          950: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};
