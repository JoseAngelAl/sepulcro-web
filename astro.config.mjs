// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Cambia esta URL cuando la cofradía tenga su dominio definitivo.
  site: 'https://santosepulcromonovar.es',
  integrations: [tailwind(), sitemap()],
});
