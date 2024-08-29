import Sidebar from '@widgets/sidebar/model'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '@widgets/header'
import styles from './styles.module.scss'
import Appoitment from '@shared/ui/appointment'

const Dashboard = () => {
  const location = useLocation()

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.section}>
          {location.pathname === '/' && (
            <Appoitment
              deal="Deal Name"
              description="This is a description of the deal."
              date="2024-08-29T10:00:00Z"
              priceInfo={100}
              count={50}
              countP={5}
            />
          )}
          <Outlet />
        </section>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default Dashboard
