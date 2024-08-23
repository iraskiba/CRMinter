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
      '@src': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@dashboard': path.resolve(__dirname, 'src/pages/dashboard'),
      '@config': path.resolve(__dirname, 'src/shared/config'),
      '@ui': path.resolve(__dirname, 'src/shared/ui'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
})
