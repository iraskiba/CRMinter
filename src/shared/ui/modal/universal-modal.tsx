import { Button, Modal } from 'antd'
import { FC, ReactNode } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { eventBus } from '@shared/lib/event-bus.ts'

type UniversalModalProps = {
  open: boolean
  onClose: () => void
  title: string
  content: ReactNode | JSX.Element
  onSave: () => void
}

const UniversalModal: FC<UniversalModalProps> = ({
  open,
  onClose,
  title,
  content,
  onSave,
}) => {
  const handleSave = () => {
    onSave()
    eventBus.emit('notification', {
      type: 'success',
      message: `${title} saved`,
    })
    onClose()
  }

  return (
    <Modal
      centered={true}
      open={open}
      onCancel={onClose}
      footer={[
        <Button onClick={onClose} key="cancel" type="default">
          Cancel
        </Button>,
        <Button key="ok" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
      closeIcon={<CloseOutlined />}
      title={title}
    >
      {content}
    </Modal>
  )
}

export default UniversalModal
