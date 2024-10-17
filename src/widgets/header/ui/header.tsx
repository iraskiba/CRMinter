import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { ModalEvent } from '@process/modal'
import { Avatar, Button, Tooltip } from 'antd'
import { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Paths from '@app/router/path.ts'
import useUserStore from '@pages/login/model/auth-store.ts'
import { getButtonText, getPageTitle } from '@widgets/header/model/utils.ts'
import { AddCustomer } from '@entities/customers'
import { AddNew } from '@entities/dashboard'
import { AddDeals } from '@entities/deals-modal'
import { AddTasks } from '@entities/tasks'
import CustomButton from '@shared/ui/custom-button-plus'
import { logo } from './logo.tsx'
import styles from './styles.module.scss'

const Header = () => {
  const { user } = useUserStore((state) => state)
  const navigate = useNavigate()
  const location = useLocation()
  const pageTitle = getPageTitle(location.pathname)
  const buttonText = getButtonText(location.pathname)
  const handleLogoClick = () => {
    navigate(Paths.home.path)
  }
  const getChildren = (): ReactNode => {
    if (buttonText.includes('Customers')) {
      return <AddCustomer />
    } else if (buttonText.includes('Deals')) {
      return <AddDeals />
    } else if (buttonText.includes('Tasks')) {
      return <AddTasks />
    } else if (buttonText.includes('New')) {
      return <AddNew />
    }
    return null
  }
  const handleOpenModal = () => {
    ModalEvent.open(getChildren())
  }

  return (
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <div onClick={handleLogoClick} className={styles.logo}>
          {logo}
        </div>
        <div className={styles.title}>
          <h2>{pageTitle}</h2>
        </div>
      </div>
      <div className={styles.profile}>
        <ul>
          <li>
            <CustomButton onClick={handleOpenModal}>{buttonText}</CustomButton>
          </li>
          <li>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
          </li>
          <li>
            {user?.avatar ? (
              <Avatar size={49} src={user.avatar} alt={user.name} />
            ) : (
              <Button icon={<UserOutlined />} shape="circle" />
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header
