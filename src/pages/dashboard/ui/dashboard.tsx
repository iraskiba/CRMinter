import Sidebar from '@widgets/sidebar/model'
import { Outlet } from 'react-router-dom'
import Header from '@widgets/header'
import styles from './styles.module.scss'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <section style={{ width: '100%' }}>
          <Outlet />
        </section>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default Dashboard
