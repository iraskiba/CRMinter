import Sidebar from '@widgets/sidebar'
import { Outlet } from 'react-router-dom'
import Header from '@ui/header/header.tsx'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <section>
          <Outlet />
        </section>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default Dashboard
