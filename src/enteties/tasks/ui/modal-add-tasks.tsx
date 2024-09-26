import { Button, Input, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { FC } from 'react'
import FormInput from '@shared/ui/form-items/input'
import { FormProvider, useForm } from 'react-hook-form'
import { eventBus } from '@shared/lib/event-bus.ts'

type ModalProps = {
  open: boolean
  onClose: () => void
}
const AddTasks: FC<ModalProps> = ({ open, onClose }) => {
  const methods = useForm()
  const handleSaveTasks = () => {
    eventBus.emit('notification', {
      type: 'success',
      message: 'Task Saved',
    })
    onClose()
  }
  const onSubmit = () => {
    methods.handleSubmit(handleSaveTasks)()
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
          <Button key="ok" type="primary" onClick={handleSaveTasks}>
            Save Task
          </Button>,
        ]}
        closeIcon={<CloseOutlined />}
        title="Add New Tasks"
      >
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <Input.TextArea rows={4} placeholder="Enter task description" />
            <FormInput type="text" name="dueDate" label="Due Date" />
          </form>
        </FormProvider>
      </Modal>
    </>
  )
}
export default AddTasks
