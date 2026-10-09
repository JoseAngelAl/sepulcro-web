/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        morado: {
          DEFAULT: '#3D1F4E',
          claro: '#6B4A7C',
          oscuro: '#2A1536',
          50: '#F4EFF7',
          100: '#E7DCEF',
        },
        oro: {
          DEFAULT: '#C9A24B',
          claro: '#E0C583',
          oscuro: '#A6823A',
        },
        crema: {
          DEFAULT: '#F7F3EC',
          oscuro: '#EDE6DA',
        },
        carbon: {
          DEFAULT: '#1E1B22',
          claro: '#3A3540',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        suave: '0 10px 40px -12px rgba(61, 31, 78, 0.25)',
        elegante: '0 20px 60px -20px rgba(30, 27, 34, 0.45)',
      },
      letterSpacing: {
        amplio: '0.18em',
      },
      maxWidth: {
        contenido: '72rem',
      },
      keyframes: {
        'aparecer': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        aparecer: 'aparecer 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};
