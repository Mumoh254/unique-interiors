import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 512, 
      deleteOriginFile: false, 

    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 512, 
      deleteOriginFile: false,
     
      options: {
        level: 11, 
      },
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3, // Number of times to run the compress
      },
      mangle: true,
    },
  },
  server: {
    historyApiFallback: true,
  },
});