import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@magicui': path.resolve(__dirname, './src/components/magicui'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@frontend': path.resolve(__dirname, './frontend')
    }
  }
})