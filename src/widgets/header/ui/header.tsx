import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { logo } from './logo.tsx'
import styles from './styles.module.scss'
import AddNewTask from '@pages/tasks/ui/add-new-task.tsx'
import { FC } from 'react'

type TaskModalProps = {
  visible: boolean
  onClose: () => void
}
const Header: FC<TaskModalProps> = ({ visible, onClose }) => {
  return (
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <div className={styles.logo}>{logo}</div>
        <div className={styles.title}>
          <h2>Dashboard</h2>
        </div>
      </div>
      <div className={styles.profile}>
        <ul>
          <li>
            <AddNewTask visible={visible} onClose={onClose} />
          </li>
          <li>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
          </li>
          <li>
            <Button shape="circle" />
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header
