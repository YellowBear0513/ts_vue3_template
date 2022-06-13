import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: 'store',
        replacement: resolve(__dirname, 'src/store/store')
      }
    ],
    extensions: ['.js', '.vue', '.json', '.scss', '.ts', '.mjs', '*']
  },
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `$injectedColor: orange;`
        additionalData: '@import "./src/style/common.scss";' // add common style
      }
    }
  },
  server: {
    port: 4000, // 服务端口号
    hmr: { overlay: false },
    fs: { strict: false },
    open: true, // auto open browser
    cors: true // cors
  }
})
