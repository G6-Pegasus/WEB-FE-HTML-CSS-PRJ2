import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://g6-pegasus.github.io/WEB-FE-HTML-CSS-PRJ2"
})
