import { Button, Tooltip } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { logo } from './logo.tsx'
import styles from './styles.module.scss'

const Header = () => {
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
            <Button
              className={styles.customButton}
              type="primary"
              icon={<PlusOutlined />}
              iconPosition="end"
            >
              Add New
            </Button>
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
