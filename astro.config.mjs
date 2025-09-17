import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kixago.com',
  trailingSlash: 'never',
  // i18n: {
  //   locales: ['en', 'he'],
  //   defaultLocale: 'en',
  //   routing: {
  //     prefixDefaultLocale: false
  //   }
  // },
  vite: {
    plugins: [tailwindcss()]
  }
});
