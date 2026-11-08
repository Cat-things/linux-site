// @ts-check
import process from 'node:process';
import { defineConfig, fontProviders } from 'astro/config';

// GitHub Pages: the deploy workflow passes the Pages origin and base path
// (from actions/configure-pages) so the same build works for
// https://<org>.github.io/<repo>/ and for a custom domain.
const site = process.env.SITE_URL || 'https://kat-linux.github.io';
const base = process.env.BASE_PATH || '/';

/** @param {string} pkg @param {string} file */
const fontsource = (pkg, file) => `./node_modules/@fontsource-variable/${pkg}/files/${file}`;

export default defineConfig({
  site,
  base,
  output: 'static',
  devToolbar: { enabled: false },
  // Keep source whitespace: compression drops the space where a line wraps before an inline tag.
  compressHTML: false,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Anybody',
      cssVariable: '--font-display',
      fallbacks: ['Arial Black', 'Arial', 'sans-serif'],
      options: {
        variants: [
          {
            src: [fontsource('anybody', 'anybody-latin-standard-normal.woff2')],
            weight: '100 900',
            style: 'normal',
            stretch: '50% 150%',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Atkinson Hyperlegible Next',
      cssVariable: '--font-body',
      fallbacks: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      options: {
        variants: [
          {
            src: [fontsource('atkinson-hyperlegible-next', 'atkinson-hyperlegible-next-latin-wght-normal.woff2')],
            weight: '200 800',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      options: {
        variants: [
          {
            src: [fontsource('jetbrains-mono', 'jetbrains-mono-latin-wght-normal.woff2')],
            weight: '100 800',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
