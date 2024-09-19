import { useRoutes } from 'react-router-dom'
import { rotes } from './router'
import '../App.css'
import NotificationDisplay from '../process/notificationDiasplay.tsx'

function App() {
  const routing = useRoutes(rotes)
  return (
    <>
      <NotificationDisplay />
      {routing}
    </>
  )
}

export default App
