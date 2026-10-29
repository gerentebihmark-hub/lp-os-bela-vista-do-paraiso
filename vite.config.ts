import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'blink-rewrite',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const parsedUrl = req.url ? req.url.split('?')[0] : '';
            if (parsedUrl === '/blink' || parsedUrl === '/blink/') {
              req.url = '/blink/index.html';
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      middlewares: [
        (req, res, next) => {
          const url = req.url ? req.url.split('?')[0] : '';
          if (url === '/blink' || url === '/blink/') {
            req.url = '/blink/index.html' + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
          }
          next();
        }
      ]
    },
  };
});
