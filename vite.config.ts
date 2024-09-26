import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "/WEB-FE-HTML-CSS-PRJ2",
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
