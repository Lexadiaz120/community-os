import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages project site serves from /<repo-name>/, so assets must be
// built with that base path. Override with BASE_PATH="/" for a custom domain.
// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH ?? '/community-os/',
  plugins: [vue()],
})
