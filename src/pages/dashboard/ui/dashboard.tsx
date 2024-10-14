import Sidebar from '@widgets/sidebar'
import { Outlet } from 'react-router-dom'
import Header from '@widgets/header'
import styles from './styles.module.scss'

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: ' #F6FAFD' }}>
      <Header />
      <main className={styles.main}>
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
