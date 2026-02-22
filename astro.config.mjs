// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://clerigopoker.com',
  output: 'static',
  
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/politica-de-privacidad') &&
        !page.includes('/politica-de-cookies') &&
        !page.includes('/terminos-y-condiciones'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    // Sharp for AVIF optimization
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  build: {
    // Inline small styles for performance
    inlineStylesheets: 'auto',
    assets: '_astro',
  },

  compressHTML: true,

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
