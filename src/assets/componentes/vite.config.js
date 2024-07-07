import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  css: {
    preprocessor: 'scss',
    include: [
      resolve(__dirname, 'src/scss/styles.scss'),
    ],
  },
});
