import { useRoutes } from 'react-router-dom'
import { rotes } from './router'
import '../App.css'

function App() {
  return useRoutes(rotes)
}

export default App
