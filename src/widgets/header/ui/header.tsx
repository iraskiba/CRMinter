import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { logo } from './logo.tsx'
import styles from './styles.module.scss'
import CustomButton from '@shared/ui/custom-button-plus'

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
            <CustomButton variant={'new'} />
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
