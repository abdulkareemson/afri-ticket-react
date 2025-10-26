/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        open: "#22c55e", // green
        in_progress: "#f59e0b", // amber
        closed: "#9ca3af", // gray
        primary: "#1e40af", // blue (general accent)
        secondary: "#f3f4f6",
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
