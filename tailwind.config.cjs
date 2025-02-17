/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#FFFEF1',
      },
      backgroundColor: {
        'main': '#FFFEF1',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
