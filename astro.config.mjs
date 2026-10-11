// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  prefetch: true,

  site: 'https://playersclub.crnacura.workers.dev/',

  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
