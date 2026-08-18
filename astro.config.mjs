// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages at sitewisers.github.io/domestic-electrician
export default defineConfig({
  site: 'https://sitewisers.github.io',
  base: '/domestic-electrician',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
