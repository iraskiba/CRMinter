import { Button, Input, Form, Checkbox } from 'antd'
import { FC, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { postTask } from '../api/api.tsx'
import { ModalEvent } from '../../../process/modal/index.ts'

type TaskModalProps = {
  task: TaskFormValues | null
}

type TaskFormValues = {
  id: string
  date: string
  tasks: string
}

const EditTaskModal: FC<TaskModalProps> = ({ task }) => {
  const [form] = Form.useForm()
  const mutation = useMutation({
    mutationFn: postTask,
  })
  useEffect(() => {
    if (task) {
      console.log('Setting form values:', task)
      form.setFieldsValue(task)
    }
  }, [task, form])
  const handleClose = () => {
    ModalEvent.close()
  }
  const handleSubmit = (values: TaskFormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        console.log('Task successfully posted')
        handleClose()
      },
      onError: (error) => {
        console.error('Error posting task:', error)
      },
    })
  }

  return (
    <>
      {task && (
        <Form id="taskForm" onFinish={handleSubmit} form={form}>
          <h2>Edit Task</h2>
          <Form.Item name="complete">
            <Checkbox>Complete?</Checkbox>
          </Form.Item>
          <Form.Item name="date">
            <Input type="text" placeholder="Due Date" />
          </Form.Item>
          <Form.Item name="tasks">
            <Input.TextArea rows={4} placeholder="Description" />
          </Form.Item>
          <Button danger onClick={handleClose} key="cancel" type="text">
            Delete
          </Button>
          <Button key="ok" type="primary" htmlType="submit" form="taskForm">
            Done
          </Button>
        </Form>
      )}
    </>
  )
}

export default EditTaskModal
