/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // Include your entry HTML file
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all JS/TS/JSX/TSX files in the `src` directory
  ],
  theme: {
    extend: {},                     // Add custom styles if needed
  },
  plugins: [],
};
