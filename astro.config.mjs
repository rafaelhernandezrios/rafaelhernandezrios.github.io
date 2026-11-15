// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site keeps the same public URL as the previous React version so that
// Google keeps the existing index. English stays at "/" (what Google already
// indexed); Spanish lives under "/es/".
export default defineConfig({
  site: 'https://rafaelhernandezrios.github.io',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-MX' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
