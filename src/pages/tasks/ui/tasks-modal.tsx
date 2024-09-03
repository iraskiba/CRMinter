import { Button, Modal, Input } from 'antd'
import { FC } from 'react'
import { CloseOutlined } from '@ant-design/icons'
interface TaskModalProps {
  visible: boolean
  //onClose: () => void
}

const TaskModal: FC<TaskModalProps> = ({ visible }) => {
  return (
    <>
      <Modal
        centered={true}
        visible={visible}
        //onCancel={onClose}
        footer={[
          <Button key="cancel" type="default">
            Cancel
          </Button>,
          <Button
            key="ok"
            type="primary"
            onClick={() => console.log('Task opened')}
          >
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

export default TaskModal
