/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maritime': {
          'dark': '#374151',     // QuickLog sidebar color
          'blue': '#3b82f6',     // QuickLog active blue
          'light': '#f8fafc',    // Light background
          'emergency': '#dc2626', // Emergency button red
        }
      }
    },
  },
  plugins: [],
}