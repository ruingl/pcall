import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    minify: false,
    clean: true,
    dts: true,
  },
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    minify: true,
    clean: false,
    dts: false,
    outExtension: ({ format }) => {
      if (format === 'cjs') return { js: '.min.js' };
      if (format === 'esm') return { js: '.min.mjs' };
      return { js: '.min.js' };
    },
  },
]);
