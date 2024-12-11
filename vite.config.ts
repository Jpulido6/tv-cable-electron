import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@public', replacement: path.resolve(__dirname, 'src/pages/public') },
      { find: '@private', replacement: path.resolve(__dirname, 'src/pages/private') },
      { find: './runtimeConfig', replacement: './runtimeConfig.browser' }
    ]
  }
})
