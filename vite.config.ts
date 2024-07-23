import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/posts/register': {
        target: 'http://54.243.67.213:8080',
        changeOrigin: true,
      },
      '/posts': {
        target: 'http://54.243.67.213:8080',
        changeOrigin: true,
      },
      '/api/comments': {
        target: 'http://54.243.67.213:8080',
        changeOrigin: true,
      },
    },
  },
});
