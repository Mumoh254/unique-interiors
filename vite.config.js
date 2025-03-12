import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 0, // Compress all files regardless of size
      deleteOriginFile: false, 
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 0, // Compress all files regardless of size
      deleteOriginFile: false, 
      options: {
        level: 11, // Maximum compression
      },
    }),
  ],
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3,
      },
      mangle: true,
    },
    chunkSizeWarningLimit: 500, // size limit for warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
});