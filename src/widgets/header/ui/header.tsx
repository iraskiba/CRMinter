import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { logo } from './logo.tsx'
import styles from './styles.module.scss'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import CustomButton from '@shared/ui/custom-button-plus'
import Paths from '@app/router/path.ts'

type TaskModalProps = {
  open: boolean
  onClose: () => void
}
const getPageTitle = (pathname: string) => {
  const pathKey = Object.keys(Paths).find((key) => Paths[key].path === pathname)
  return pathKey ? Paths[pathKey].name : 'Dashboard'
}

const Header: FC<TaskModalProps> = () => {
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
            <CustomButton onClick={() => console.log('Add New clicked')} />
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
