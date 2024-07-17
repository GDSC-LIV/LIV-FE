import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';  

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://54.243.67.213:8080', // API 서버 주소
        changeOrigin: true,  
        secure: false,  
        rewrite: (path) => path.replace(/^\/api/, '')  // '/api'를 제거하고 프록시
      }
    }
  }
});
