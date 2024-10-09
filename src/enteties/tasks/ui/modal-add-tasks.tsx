import { Button, Input } from 'antd'
import { FormEvent } from 'react'
import FormInput from '@shared/ui/form-items/input'
import { FormProvider, useForm } from 'react-hook-form'
import { eventBus } from '@shared/lib/event-bus.ts'
import { ModalEvent } from '../../../process/modal/index.ts'

const AddTasks = () => {
  const methods = useForm()
  const handleSaveTasks = () => {
    eventBus.emit('notification', {
      type: 'success',
      message: 'Task Saved',
    })
  }

  const handleClose = () => {
    ModalEvent.close()
  }
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    methods.handleSubmit(handleSaveTasks)()
    handleClose()
  }
  return (
    <FormProvider {...methods}>
      <h2>Add New Task</h2>
      <form onSubmit={onSubmit}>
        <Input.TextArea rows={4} placeholder="Enter task description" />
        <FormInput type="text" name="dueDate" label="Due Date" />
        <div style={{ marginTop: '16px', textAlign: 'right' }}>
          <Button
            onClick={handleClose}
            type="default"
            style={{ marginRight: '8px' }}
          >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Save Task
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default AddTasks
