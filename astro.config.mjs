// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
    build: {
      // Smaller CSS chunks
      cssCodeSplit: true,
      // Minify aggressively
      minify: 'esbuild',
      // Inline assets smaller than 4KB
      assetsInlineLimit: 4096,
    },
  },

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  build: {
    // Inline all stylesheets to avoid render-blocking CSS files
    inlineStylesheets: 'always',
    assets: '_astro',
  },

  compressHTML: true,

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
