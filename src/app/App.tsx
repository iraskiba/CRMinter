import { useRoutes } from 'react-router-dom'
import { rotes } from './router'
import '../App.css'
import NotificationDisplay from '../process/notificationDiasplay.tsx'
import { useEffect } from 'react'
import { fetchInterceptors } from '@shared/lib/axios.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  useEffect(() => {
    fetchInterceptors()
  }, [])

  const routing = useRoutes(rotes)
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <NotificationDisplay />
        {routing}
      </GoogleOAuthProvider>
    </>
  )
}

export default App
