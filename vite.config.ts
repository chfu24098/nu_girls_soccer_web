import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/',
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    // チャンクサイズの最適化
    rollupOptions: {
      output: {
        manualChunks: {
          // Reactライブラリを別チャンクに
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Motion/Framer Motionを別チャンクに
          'motion-vendor': ['motion'],
          // アイコンを別チャンクに
          'icons-vendor': ['lucide-react'],
        },
      },
    },
    // チャンクサイズ警告の閾値を調整
    chunkSizeWarningLimit: 1000,
    // ソースマップを無効化（本番環境）
    sourcemap: false,
    // 圧縮を有効化
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // console.logを削除
        drop_debugger: true,
      },
    },
  },
});