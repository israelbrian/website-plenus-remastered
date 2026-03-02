/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /*
       * Design system – paleta bege, dourado, preto, branco
       * Token (hex) – uso sugerido
       * color-white #ffffff – fundos claros, texto em fundo escuro
       * color-black #000000 – preto puro
       * color-beige-50 #ede8d0 – fundo principal (surface)
       * color-beige-100 #c4c0ab – fundos suaves (surface-alt)
       * color-beige-200 #9d9988 – bordas (border)
       * color-beige-300 #777567 – texto secundário
       * color-beige-400 #545248 – texto/UI médio (muted)
       * color-beige-500 #4f4d46 – fundos escuros (ex.: header)
       * color-beige-600 #33312b – texto/UI escuro
       * color-beige-900 #141410 – fundos e texto principais (primary)
       * color-gold #d4c990 – destaques, botões (accent)
       */
      colors: {
        // Neutros
        'color-white': '#ffffff',
        'color-black': '#000000',
        // Escala bege (claro → escuro)
        'color-beige-50': '#ede8d0',
        'color-beige-100': '#c4c0ab',
        'color-beige-200': '#9d9988',
        'color-beige-300': '#777567',
        'color-beige-400': '#545248',
        'color-beige-500': '#4f4d46',
        'color-beige-600': '#33312b',
        'color-beige-900': '#141410',
        'color-gold': '#d4c990',
        // Aliases semânticos (manutenção centralizada)
        'color-primary': '#141410',
        'color-surface': '#ede8d0',
        'color-surface-alt': '#c4c0ab',
        'color-muted': '#545248',
        'color-border': '#9d9988',
        'color-accent': '#d4c990',
        'color-whatsapp': '#25D366',
        'color-instagram': '#E1306C',
      },
      // Famílias de Fontes
      fontFamily: {
        // Semânticas
        'family-title': ['var(--font-montserrat)', 'sans-serif'],
        'family-body': ['var(--font-montserrat)', 'sans-serif'],
        'family-accent': ['var(--font-great-vibes)', 'cursive'],
        'family-highlight': ['var(--font-unifraktur)', 'serif'],
        // Opções para teste (Sólidas)
        'family-solid-1': ['var(--font-montserrat)', 'sans-serif'],
        'family-solid-2': ['var(--font-playfair)', 'serif'],
        'family-solid-3': ['var(--font-oswald)', 'sans-serif'],
        // Opções para teste (Delicadas)
        'family-delicate-1': ['var(--font-great-vibes)', 'cursive'],
        'family-delicate-2': ['var(--font-dancing-script)', 'cursive'],
        'family-delicate-3': ['var(--font-alex-brush)', 'cursive'],
        // Opções para teste (Góticas)
        'family-gothic-1': ['var(--font-unifraktur)', 'serif'],
        'family-gothic-2': ['var(--font-pirata)', 'serif'],
        // Fallback/System
        'family-primary': ['Inter', 'system-ui', 'sans-serif'],
        'family-secondary': ['Inter', 'system-ui', 'sans-serif'],
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
};
