import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import * as path from 'path'

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name: string) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@process': path.resolve(__dirname, 'src/process'),
      '@enteties': path.resolve(__dirname, 'src/enteties'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
})
