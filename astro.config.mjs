import sitemap from '@astrojs/sitemap';import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://renta-de-iluminacion.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  integrations: [sitemap()],
});
