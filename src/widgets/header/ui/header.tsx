import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { logo } from './logo.tsx'
import styles from './styles.module.scss'
import AddNewTask from '@pages/tasks/ui/add-new-task.tsx'
import { FC } from 'react'
import Paths from '@app/router/path.ts'
import { useLocation } from 'react-router-dom'

type TaskModalProps = {
  visible: boolean
  onClose: () => void
}
const getPageTitle = (pathname: string) => {
  const pathKey = Object.keys(Paths).find((key) => Paths[key].path === pathname)
  return pathKey ? Paths[pathKey].name : 'Dashboard'
}

const Header: FC<TaskModalProps> = ({ visible, onClose }) => {
  const location = useLocation()
  const pageTitle = getPageTitle(location.pathname)

  return (
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <div className={styles.logo}>{logo}</div>
        <div className={styles.title}>
          <h2>{pageTitle}</h2>
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
