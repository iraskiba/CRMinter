import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import { theme } from './shared/config/theme.ts'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={theme}>
    <App />
  </ConfigProvider>,
)
