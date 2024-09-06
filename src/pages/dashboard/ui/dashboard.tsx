import Sidebar from '@widgets/sidebar'
import { Outlet } from 'react-router-dom'
import Header from '@widgets/header'
import styles from './styles.module.scss'
import { FC } from 'react'

type TaskModalProps = {
  visible: boolean
  onClose: () => void
}
const Dashboard: FC<TaskModalProps> = ({ visible, onClose }) => {
  return (
    <div>
      <Header visible={visible} onClose={onClose} />
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
