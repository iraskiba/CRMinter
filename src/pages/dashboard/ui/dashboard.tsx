import Sidebar from '@widgets/sidebar'
import { Outlet } from 'react-router-dom'
import Header from '@widgets/header'
import styles from './styles.module.scss'
import CustomerDetails from '@pages/customer-details/ui/customer-details.tsx'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <CustomerDetails />
        <Sidebar />
        <section className={styles.section}>
          <Outlet />
        </section>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default Dashboard
