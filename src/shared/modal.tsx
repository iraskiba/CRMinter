import { Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { FC, ReactNode } from 'react'

type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

const CustomModal: FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Modal
      centered={true}
      open={open}
      onCancel={onClose}
      footer={null}
      closeIcon={<CloseOutlined />}
    >
      {children}
    </Modal>
  )
}

export default CustomModal
