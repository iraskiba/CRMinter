import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { logo } from './logo.tsx'
import styles from './styles.module.scss'
import { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CustomButton from '@shared/ui/custom-button-plus'
import Paths from '@app/router/path.ts'
import AddCustomer from '../../../enteties/customers/ui/modal-add-customers.tsx'
import AddDeals from '../../../enteties/deals/ui/modal-add-deals.tsx'
import AddTasks from '../../../enteties/tasks/ui/modal-add-tasks.tsx'
import { ModalEvent } from '../../../process/modal/index.ts'
import AddNew from '../../../enteties/dashboard/ui/modal-add-new.tsx'

const getPageTitle = (pathname: string) => {
  const pathKey = Object.keys(Paths).find((key) => Paths[key].path === pathname)
  return pathKey ? Paths[pathKey].name : 'Dashboard'
}

const getButtonText = (path: string): string => {
  if (path === Paths.home.path) {
    return 'Add New'
  }
  const pathEntry = Object.values(Paths).find((entry) => entry.path === path)
  return pathEntry ? `Add New ${pathEntry.name}` : 'Add New'
}

const Header = () => {
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
            <Button shape="circle" />
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header
