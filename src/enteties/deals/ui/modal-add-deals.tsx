import { Avatar, Button, Modal } from 'antd'
import { FC } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { eventBus } from '@shared/lib/event-bus.ts'
import { FormProvider, useForm } from 'react-hook-form'
import FormInput from '@shared/ui/form-items/input'
import DateInput from './day-picker.tsx'
import UniversalSelect from '@shared/ui/form-items/select'
import { OptionProps } from 'rc-select/lib/Option'

type ModalProps = {
  open: boolean
  onClose: () => void
}

const AddDeals: FC<ModalProps> = ({ open, onClose }) => {
  const methods = useForm()
  const handleSaveCustomer = () => {
    eventBus.emit('notification', {
      type: 'success',
      message: 'Deals Saved',
    })
    onClose()
  }
  const onSubmit = () => {
    methods.handleSubmit(handleSaveCustomer)
  }

  type CustomOptionProps = Omit<OptionProps, 'children'> & {
    value: string
    label: string
  }

  const roomAccessOptions: CustomOptionProps[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

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
          <Button key="ok" type="primary" onClick={handleSaveCustomer}>
            Save Deal
          </Button>,
        ]}
        closeIcon={<CloseOutlined />}
        title="Add New Deal"
      >
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <div>
              <Avatar size={50} />
              <div>
                <p>Customer</p>
                <p>Customer Name</p>
                <Button type="default">Change Customer</Button>
              </div>
            </div>

            <FormInput type="text" name="address" label="Street Address" />
            <FormInput type="text" name="city" />
            <FormInput type="text" name="state" />
            <FormInput type="text" name="code" />
            <FormInput label="Room Area (m2)" type="text" name="area" />
            <FormInput type="text" name="code" label="# of People" />
            <DateInput />
            <FormInput
              type="text"
              name="instructions"
              placeholder="Special Instructions"
            />
            <UniversalSelect name="roomAccess" options={roomAccessOptions} />
          </form>
        </FormProvider>
      </Modal>
    </>
  )
}

export default AddDeals
