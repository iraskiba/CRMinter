import { ModalEvent } from '@process/modal'
import { useMutation } from '@tanstack/react-query'
import { Button, Flex, Input } from 'antd'
import { FC, useEffect } from 'react'
import { FormProvider, useController, useForm } from 'react-hook-form'
import { postActivity } from '@entities/activity/api/api.ts'
import { eventBus } from '@shared/lib/event-bus.ts'
import DateInput from '@shared/ui/form-items/input/day-picker.tsx'
import styles from './styles.module.scss'

type EditActivityForm = {
  activityDescription: string
  date: Date | null
}

const EditActivity: FC = () => {
  const methods = useForm<EditActivityForm>()
  const { handleSubmit, setValue } = methods

  useEffect(() => {
    setValue('date', new Date())
  }, [setValue])

  const mutation = useMutation({
    mutationFn: postActivity,
    onSuccess: (data) => {
      eventBus.emit('notification', {
        type: 'success',
        message: 'Activity Recorded',
      })
      console.log('Activity recorded:', data)
    },
    onError: (error) => {
      console.error('Error saving activity:', error)
      eventBus.emit('notification', {
        type: 'error',
        message: 'Error saving activity',
      })
    },
  })

  const { field: activityDescriptionField } = useController({
    name: 'activityDescription',
    control: methods.control,
    defaultValue: '',
  })

  const handleClose = () => {
    ModalEvent.close()
  }

  const onSubmit = (data: EditActivityForm) => {
    console.log(data)
    mutation.mutate(data)
    handleClose()
  }

  return (
    <FormProvider {...methods}>
      <h2>Edit Activity</h2>
      <form
        className={styles.formItemContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input.TextArea
          {...activityDescriptionField}
          rows={4}
          placeholder="Evaluation and removal of the old system"
        />
        <DateInput name="date" />
        <Flex vertical={true} gap={24}>
          <label>Images</label>
          <Button onClick={handleClose} type="default">
            ADD
          </Button>
        </Flex>
        <Flex gap={24} justify="flex-end" align="center">
          <Button
            className={styles.buttonText}
            onClick={handleClose}
            type="text"
          >
            Delete
          </Button>
          <Button
            className={styles.stylePrimaryButton}
            type="primary"
            htmlType="submit"
          >
            Done
          </Button>
        </Flex>
      </form>
    </FormProvider>
  )
}

export default EditActivity
