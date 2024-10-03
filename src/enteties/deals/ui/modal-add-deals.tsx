import { Avatar, AvatarProps, Button, Col, Row } from 'antd'
import { FormEvent } from 'react'
import { eventBus } from '@shared/lib/event-bus.ts'
import { FormProvider, useForm } from 'react-hook-form'
import FormInput from '@shared/ui/form-items/input'
import DateInput from './day-picker.tsx'
import UniversalSelect from '@shared/ui/form-items/select'
import { OptionProps } from 'rc-select/lib/Option'
import { ModalEvent } from '../../../process/modal/index.ts'
import styles from './styles.module.scss'

export type Deal = {
  id?: string
  name: string
  area: string
  appointmentDate: string
  price: string
  status: string
  avatar?: string
  avatarProps?: AvatarProps
}
const AddDeals = ({ deal }: { deal: Deal }) => {
  const methods = useForm({
    defaultValues: deal || {},
  })

  const handleSaveDeal = () => {
    eventBus.emit('notification', {
      type: 'success',
      message: 'Deals Saved',
    })
  }
  const handleClose = () => {
    ModalEvent.close()
  }
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    methods.handleSubmit(handleSaveDeal)()
    handleClose()
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
    <FormProvider {...methods}>
      <h2>{deal ? 'Edit Deal' : 'Add New Deal'}</h2>
      <form onSubmit={onSubmit}>
        <div>
          <Avatar size={50} src={deal?.avatar} />
          <Button type="default">Change Customer</Button>
        </div>
        <FormInput
          style={{ marginBottom: '20px' }}
          type="text"
          name="name"
          label="Street Address"
        />

        <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
          <Col span={8}>
            <FormInput type="text" name="area" placeholder="City" />
          </Col>
          <Col span={8}>
            <FormInput type="text" name="state" placeholder="State/ Province" />
          </Col>
          <Col span={8}>
            <FormInput type="text" name="code" placeholder="Zip Code" />
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
          <Col span={12}>
            <FormInput label="Room Area (m2)" type="text" name="area" />
          </Col>
          <Col span={12}>
            <FormInput type="text" name="code" label="# of People" />
          </Col>
        </Row>

        <DateInput />
        <FormInput
          style={{ marginBottom: '20px' }}
          type="text"
          name="instructions"
          placeholder="Special Instructions"
          label="Special Instructions"
        />

        <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
          <Col span={12}>
            <UniversalSelect
              label="Room Access"
              name="roomAccess"
              options={roomAccessOptions}
            />
          </Col>
          <Col span={12}>
            <FormInput
              type="text"
              name="price"
              placeholder="500"
              label="Price"
            />
          </Col>
        </Row>

        <UniversalSelect
          label="Progress"
          name="progress"
          options={roomAccessOptions}
        />

        {!deal && (
          <Button
            onClick={handleClose}
            type="default"
            className={styles.commonButton}
          >
            Cancel
          </Button>
        )}
        <Button
          type="primary"
          htmlType="submit"
          className={styles.commonButton}
        >
          {deal ? 'Done' : 'Save Deal'}
        </Button>
      </form>
    </FormProvider>
  )
}

export default AddDeals