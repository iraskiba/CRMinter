import { Avatar, Button, Modal } from 'antd'
import { FC } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { eventBus } from '@shared/lib/event-bus.ts'
import { FormProvider, useForm } from 'react-hook-form'
import FormInput from '@shared/ui/form-items/input'

type ModalProps = {
  open: boolean
  onClose: () => void
}

const AddCustomer: FC<ModalProps> = ({ open, onClose }) => {
  const methods = useForm()
  const handleSaveCustomer = () => {
    eventBus.emit('notification', {
      type: 'success',
      message: 'Customer Saved',
    })
    onClose()
  }
  const onSubmit = () => {
    methods.handleSubmit(handleSaveCustomer)
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
          <Button key="ok" type="primary" onClick={handleSaveCustomer}>
            Save Customer
          </Button>,
        ]}
        closeIcon={<CloseOutlined />}
        title="Add New Customer"
      >
        <div>
          <Avatar size={50} />
        </div>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="email" name="email" label="Email" />
            <FormInput label="Phone" type="tel" name="phone" />
            <FormInput
              label="Address"
              type="text"
              name="address"
              placeholder="Street Address"
            />
            <FormInput type="text" name="city" placeholder="City" />
            <FormInput
              type="text"
              name="province"
              placeholder="State/ Province"
            />
            <FormInput type="text" name="code" placeholder="Zip Code" />
          </form>
        </FormProvider>
      </Modal>
    </>
  )
}

export default AddCustomer
