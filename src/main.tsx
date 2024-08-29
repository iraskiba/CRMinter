import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import { theme } from './shared/config/theme.ts'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
)
