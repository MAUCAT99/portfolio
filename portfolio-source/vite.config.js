import { defineConfig } from 'vite'

// base: './' 让构建产物用相对路径，扔到任何静态托管（GitHub Pages 子路径、对象存储、Nginx 子目录）都能直接跑。
export default defineConfig({
  base: './',
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
