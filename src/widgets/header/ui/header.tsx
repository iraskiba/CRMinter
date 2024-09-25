import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { logo } from './logo.tsx'
import styles from './styles.module.scss'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CustomButton from '@shared/ui/custom-button-plus'
import UniversalModal from '@shared/ui/modal/universal-modal.tsx'
import ModalContentMap from '@widgets/header/ui/modal-content.tsx'
import { buttonVariants } from '@widgets/header/model/constants.tsx'
import { getPageTitle } from '@widgets/header/model/utils.ts'

type TaskModalProps = {
  open: boolean
  onClose: () => void
}

const Header: FC<TaskModalProps> = () => {
  const location = useLocation()
  const pageTitle = getPageTitle(location.pathname)
  const currentPath = location.pathname

  const [isModalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  const buttonVariant = buttonVariants[location.pathname] || 'new'
  const handleButtonClick = () => {
    let title = 'Add New'
    if (currentPath === '/deals') {
      title = 'Add New Deal'
    } else if (currentPath === '/customers') {
      title = 'Add New Customer'
    } else if (currentPath === '/tasks') {
      title = 'Add New Task'
    }

    setModalTitle(title)
    setModalOpen(true)
  }

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
            <CustomButton variant={buttonVariant} onClick={handleButtonClick} />
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
      <UniversalModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        content={
          <ModalContentMap
            path={currentPath}
            onSubmit={(data) => console.log(data)}
          />
        }
        onSave={() => {
          console.log(`${modalTitle} saved`)
          setModalOpen(false)
        }}
      />
    </header>
  )
}
export default Header
