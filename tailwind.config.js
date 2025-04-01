// tailwind.config.js
export default {
    darkMode: 'class', // Enable class-based dark mode
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Include all your React components
    ],
    theme: {
      extend: {}, // Add customizations here if needed
    },
    plugins: [], // Add Tailwind plugins here if needed
  };