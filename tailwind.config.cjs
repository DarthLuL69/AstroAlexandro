module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'custom-bg': '#FFFEF1',
      },
      fontFamily: {
        averia: ['"Averia Serif Libre"', 'serif'],
      },
    },
  },
  plugins: [],
};
