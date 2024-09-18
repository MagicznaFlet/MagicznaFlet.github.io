import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  compression({
    algorithm: 'brotliCompress',
    threshold: 1024,
  }),
  imagetools({

  })],
  mode: 'production',
  base: '/',
  // server: {
  //   warmup: {
  //     clientFiles: [
  //       './public/monster.glb'
  //     ]
  //   }
  // },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: {
          // Konfiguracja podziału kodu na osobne pliki

        },
      },
    },
  },
})
