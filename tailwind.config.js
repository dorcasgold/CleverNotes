/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF', // Light mode background
          dark: '#0a1330', // Dark mode background
        },
        text: {
          light: '#3C3C3C', // Light mode text
          dark: '#FFFFFF', // Dark mode text
        },
        box: {
          light: '#eef3f9', // Light mode box
          dark: '#232a47', // Dark mode box
        },
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
  darkMode: 'class', // or 'media' if you want to use the system's dark mode setting
  plugins: [],
};
