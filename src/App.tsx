import { useRoutes } from 'react-router-dom'
import { rotes } from './router'

function App() {
  const routs = useRoutes(rotes)
  return routs
}

export default App
