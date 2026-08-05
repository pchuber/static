import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://username.github.io',
  base: '/static',
  image: {
    service: { id: 'passthrough' },
  },
});
