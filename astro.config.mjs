import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: vercel({edgeMiddleware: true}),
  integrations: [
    tailwind(),
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'it',
        locales: {
          en: 'en-US',
          it: 'it-IT'
        }
      },
      filter: (page) => {
        // Exclude admin pages and 404 page from the sitemap
       return !page.includes('/admin') && !page.endsWith('404.astro');
      },
      serialize: (item) => {
        // Customize the priority for different types of pages
        if (item.url === 'https://www.stormxdigital.com') {
          item.priority = 1.0;
        } else if (item.url.includes('/blog/')) {
          item.changefreq = 'daily';
          item.priority = 0.9;
        }
        return item;
      },
    })
  ],
  site: 'https://www.stormxdigital.com',
  i18n: {
    defaultLocale: "it",
    locales: ["en", "it"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
});