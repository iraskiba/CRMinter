import { createRoot } from 'react-dom/client'
import App from './app'
import './index.css'
import { ConfigProvider } from 'antd'
import { theme } from './shared/config/theme.ts'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={theme}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </ConfigProvider>,
)
