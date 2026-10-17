/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Noche de procesión: el color dominante.
        noche: {
          DEFAULT: '#171220',
          profunda: '#0E0A15',
          suave: '#221A31',
        },
        // Morado del hábito (fajín y capuchón): color estructural.
        habito: {
          DEFAULT: '#3B2350',
          claro: '#53356F',
          oscuro: '#2A1840',
          50: '#F1ECF6',
          100: '#E0D4EC',
        },
        // Blanco de la túnica: superficie de lectura.
        lienzo: {
          DEFAULT: '#F2F0EA',
          oscuro: '#E6E2D9',
        },
        // Ámbar de la vela: filetes, bordados, cifras.
        candela: {
          DEFAULT: '#DFA23C',
          claro: '#ECC572',
          oscuro: '#8A5E12',
        },
        // Rojo de la cruz potenzada: único acento.
        brasa: {
          DEFAULT: '#B0242A',
          claro: '#CE3A40',
        },
        // Humo del incienso: texto secundario sobre lienzo.
        humo: {
          DEFAULT: '#6E6672',
          claro: '#9A919E',
        },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        texto: ['Spectral', 'Georgia', 'serif'],
      },
      maxWidth: {
        contenido: '74rem',
        prosa: '68ch',
      },
      boxShadow: {
        // Sombra única, reservada a la pieza principal (retrato del cartel).
        marco: '0 30px 70px -40px rgba(14, 10, 21, 0.9)',
      },
      keyframes: {
        'izar': {
          '0%': { opacity: '0', letterSpacing: '0.06em' },
          '100%': { opacity: '1', letterSpacing: '0' },
        },
        'encender': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        izar: 'izar 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
        encender: 'encender 1.4s ease-out both',
      },
    },
  },
  plugins: [],
};
