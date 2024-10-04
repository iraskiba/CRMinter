import Sidebar from '@widgets/sidebar'
import { Outlet } from 'react-router-dom'
import Header from '@widgets/header'
import styles from './styles.module.scss'
import { Deal } from '../../../enteties/deals/ui/modal-add-deals.tsx'

const Dashboard = ({ deal }: { deal: Deal }) => {
  return (
    <div>
      <Header deal={deal} />
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
