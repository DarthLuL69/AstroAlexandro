/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: {
          main: 'rgb(var(--color-text-main) / <alpha-value>)',
        },
        bg: {
          main: 'rgb(var(--color-bg-main) / <alpha-value>)',
          muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
        },
        border: {
          main: 'rgb(var(--color-border-main) / <alpha-value>)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--color-text-main))',
            'h1, h2, h3, h4': {
              color: 'rgb(var(--color-text-main))',
            },
            'ul > li::marker': {
              color: 'rgb(var(--color-text-main))',
            },
          },
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        serif: ['Newsreader Variable', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
