import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from "@tailwindcss/vite";
// import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["h"].includes(tag),
        },
      },
    }),
    vueDevTools(),
    tailwindcss(),
    // dynamicImportVars({
    //   include: ['**/highlight.js/lib/languages/**'],
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 'highlight.js': path.resolve(__dirname, 'node_modules/highlight.js'),
    },
  },
});
