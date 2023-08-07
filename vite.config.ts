/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import createProxyPlugin from './plugins/proxy2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createProxyPlugin({
    target: 'http://localhost:3000',
    changeOrigin: true
  })],
  server: {
    port: 8090
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
