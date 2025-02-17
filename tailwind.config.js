/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,astro}', // Add your source files
    './public/**/*.{html,js}', // Add your public files
    './images/**/*.{png,jpg,jpeg,svg}' // Add your image files
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1a202c',
        'custom-light': '#f7fafc',
      },
    },
  },
  plugins: [],
}

