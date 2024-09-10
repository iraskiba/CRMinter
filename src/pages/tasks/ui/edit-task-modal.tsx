import { Button, Modal, Input, Form, Checkbox } from 'antd'
import { FC } from 'react'
import { CloseOutlined } from '@ant-design/icons'

type TaskModalProps = {
  visible: boolean
  onClose: () => void
}

const EditTaskModal: FC<TaskModalProps> = ({ visible, onClose }) => {
  return (
    <div style={{ width: 40 }}>
      <Modal
        centered={true}
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button danger onClick={onClose} key="cancel" type="text">
            Delete
          </Button>,
          <Button
            key="ok"
            type="primary"
            onClick={() => {
              console.log('Task opened')
              onClose()
            }}
          >
            Done
          </Button>,
        ]}
        closeIcon={<CloseOutlined />}
        title="Edit Task"
        width={400}
      >
        <Form>
          <div style={{ display: 'flex', marginBottom: 16 }}>
            <label>
              Complete?
              <Checkbox style={{ marginLeft: 24 }} />
            </label>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>
              Due Date
              <Input type="text" placeholder="Due Date" />
            </label>
          </div>

          <label>
            Description
            <Input.TextArea rows={4} placeholder="Lorem ipsum" />
          </label>
        </Form>
      </Modal>
    </div>
  )
}

export default EditTaskModal
