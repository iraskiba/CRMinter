import { useRoutes } from 'react-router-dom'
import { rotes } from './router'
import '../App.css'
import NotificationDisplay from '../process/notificationDiasplay.tsx'
import { useEffect } from 'react'
import { fetchInterceptors } from '@shared/lib/axios.tsx'

function App() {
  useEffect(() => {
    fetchInterceptors()
  }, [])

  const routing = useRoutes(rotes)
  return (
    <>
      <NotificationDisplay />
      {routing}
    </>
  )
}

export default App
