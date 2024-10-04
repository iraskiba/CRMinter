import { Button, Input } from 'antd'
import { FormEvent } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { eventBus } from '@shared/lib/event-bus.ts'
import { ModalEvent } from '../../process/modal/index.ts'
import DateInput from '../deals/ui/day-picker.tsx'

const EditActivity = () => {
  const methods = useForm()
  const handleSaveTasks = () => {
    eventBus.emit('notification', {
      type: 'success',
      message: 'Activity Recorded',
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
      <h2>Edit Activity</h2>
      <form onSubmit={onSubmit}>
        <Input.TextArea
          rows={4}
          placeholder="Evaluation and removal of the old system"
        />
        <DateInput />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label>Images</label>
          <Button onClick={handleClose} type="default">
            ADD
          </Button>
        </div>
        <Button
          onClick={handleClose}
          type="text"
          style={{ marginRight: '8px', color: 'red' }}
        >
          Delete
        </Button>
        <Button type="primary" htmlType="submit">
          Done
        </Button>
      </form>
    </FormProvider>
  )
}

export default EditActivity
