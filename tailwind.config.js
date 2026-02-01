/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Cores de Background
      colors: {
        'color-primary': '#1a1a1a',
        'color-secondary': '#f5f5f5',
        'color-tertiary': '#e0e0e0',
        'color-quaternary': '#ffffff',
        'color-light-bege': '#EDE8D0',
        'color-dark-bege': '#4F4D46'
      },
      // Famílias de Fontes
      fontFamily: {
        'family-primary': ['Inter', 'system-ui', 'sans-serif'],
        'family-secondary': ['Inter', 'system-ui', 'sans-serif'],
        'family-accent': ['Inter', 'system-ui', 'sans-serif'],
      },
      // Outras customizações
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
