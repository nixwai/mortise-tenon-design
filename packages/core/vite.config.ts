import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: { index: resolve(__dirname, './index.ts') },
      name: 'mortise-tenon-design',
      fileName: 'mortise-tenon-design',
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: '../../dist/mortise-tenon-design/es',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: '../../dist/mortise-tenon-design/lib',
        },
      ],
    },
  },
  resolve: { alias: { '@mortise-tenon-design/components': resolve(__dirname, '../components') } },
  plugins: [
    vue(),
    dts({
      include: ['./index.ts', '../components'],
      outDir: [
        '../../dist/mortise-tenon-design/es',
        '../../dist/mortise-tenon-design/lib',
      ],
      tsconfigPath: '../../tsconfig.json',
    }),
    copy({
      verbose: true,
      hook: 'buildStart',
      targets: [
        {
          src: '../mortise-tenon-design/README.md',
          dest: '../../dist/mortise-tenon-design',
        },
        {
          src: '../mortise-tenon-design/package.json',
          dest: '../../dist/mortise-tenon-design',
        },
      ],
    }),
  ],
});
