/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056D2", // Strong, dominant Blue
        secondary: "#FF7F11", // Vibrant Orange
        dark: "#1A1A1A",
        light: "#F5F5F5"
      }
    },
  },
  plugins: [],
}
