import { Button, Modal, Input, Form, Checkbox } from 'antd'
import { FC } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'
import { postTask } from '../api/api.tsx'

type TaskModalProps = {
  open: boolean
  onClose: () => void
}

type TaskFormValues = {
  complete: boolean
  dueDate: string
  description: string
}

const EditTaskModal: FC<TaskModalProps> = ({ open, onClose }) => {
  const mutation = useMutation({
    mutationFn: postTask,
  })

  const handleSubmit = (values: TaskFormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        console.log('Task successfully posted')
        onClose()
      },
      onError: (error) => {
        console.error('Error posting task:', error)
      },
    })
  }

  return (
    <Modal
      centered={true}
      open={open}
      onCancel={onClose}
      footer={[
        <Button danger onClick={onClose} key="cancel" type="text">
          Delete
        </Button>,
        <Button key="ok" type="primary" htmlType="submit" form="taskForm">
          Done
        </Button>,
      ]}
      closeIcon={<CloseOutlined />}
      title="Edit Task"
      width={400}
    >
      <Form id="taskForm" onFinish={handleSubmit}>
        <Form.Item name="complete">
          <Checkbox>Complete?</Checkbox>
        </Form.Item>

        <Form.Item name="dueDate">
          <Input type="text" placeholder="Due Date" />
        </Form.Item>

        <Form.Item name="description">
          <Input.TextArea rows={4} placeholder="Description" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditTaskModal
