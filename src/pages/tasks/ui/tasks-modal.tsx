import { Button, Modal, Input } from 'antd'
import { FC } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { eventBus } from '@shared/lib/event-bus.ts'

type TaskModalProps = {
  open: boolean
  onClose: () => void
}

const TasksModal: FC<TaskModalProps> = ({ open, onClose }) => {
  const handleSaveTask = () => {
    console.log('Task opened')
    eventBus.emit('notification', {
      type: 'success',
      message: 'Task Saved',
    })
    onClose()
  }
  return (
    <>
      <Modal
        centered={true}
        open={open}
        onCancel={onClose}
        footer={[
          <Button onClick={onClose} key="cancel" type="default">
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleSaveTask}>
            Save Task
          </Button>,
        ]}
        closeIcon={<CloseOutlined />}
        title="Add New Task"
      >
        <Input.TextArea rows={4} placeholder="Enter task description" />
        <label>Due Date</label>
        <Input type="text" placeholder="Due Date" />
      </Modal>
    </>
  )
}

export default TasksModal
