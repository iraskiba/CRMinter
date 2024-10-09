import { Avatar, Button, Col, Row, Upload } from 'antd'
import { FormEvent, useState } from 'react'
import { eventBus } from '@shared/lib/event-bus.ts'
import { FormProvider, useForm } from 'react-hook-form'
import FormInput from '@shared/ui/form-items/input'
import { UploadOutlined } from '@ant-design/icons'
import styles from './styles.module.scss'

import { ModalEvent } from '../../../process/modal/index.ts'

const AddCustomer = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  const methods = useForm()

  const handleSaveCustomer = () => {
    eventBus.emit('notification', {
      type: 'success',
      message: 'Customer Saved',
    })
  }
  const handleClose = () => {
    ModalEvent.close()
  }
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    methods.handleSubmit(handleSaveCustomer)()
    handleClose()
  }

  const myPromiseUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }
  const handleUpload = async (file: File) => {
    try {
      const result = await myPromiseUpload(file)
      setAvatarUrl(result)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h2>Add New Customer</h2>

      <div>
        <Avatar size={86} src={avatarUrl} />
        <Upload
          showUploadList={false}
          beforeUpload={async (file) => {
            await handleUpload(file)
            return false
          }}
        >
          <Button icon={<UploadOutlined />} />
        </Upload>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <FormInput type="email" name="email" label="Email" />
            <FormInput type="phone" name="phone" label="Phone" />
          </div>

          <FormInput
            style={{ marginBottom: '20px' }}
            label="Address"
            type="text"
            name="address"
            placeholder="Street Address"
          />

          <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
            <Col span={8}>
              <FormInput type="text" name="city" placeholder="City" />
            </Col>
            <Col span={8}>
              <FormInput
                type="text"
                name="province"
                placeholder="State/ Province"
              />
            </Col>
            <Col span={8}>
              <FormInput type="text" name="code" placeholder="Zip Code" />
            </Col>
          </Row>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.commonButton}
              onClick={handleClose}
              type="text"
            >
              Cancel
            </Button>
            <Button
              className={styles.commonButton}
              type="primary"
              htmlType="submit"
            >
              Save Customer
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default AddCustomer
