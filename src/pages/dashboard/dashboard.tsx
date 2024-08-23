import Sidebar from '@widgets/Sidebar'

import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <header>header</header>
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
