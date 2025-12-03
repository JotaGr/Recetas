import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Recetas/', // Base path para GitHub Pages
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
