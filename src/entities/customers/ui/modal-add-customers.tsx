import { UploadOutlined } from '@ant-design/icons'
import { ModalEvent } from '@process/modal'
import { Avatar, Button, Col, Row, Upload } from 'antd'
import { FormEvent, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { eventBus } from '@shared/lib/event-bus.ts'
import { myPromiseUpload } from '@shared/lib/uploadFunction.ts'
import { FormInput } from '@shared/ui/form-items/input'
import styles from './styles.module.scss'

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
        <form className={styles.formItemContainer} onSubmit={onSubmit}>
          <div className={styles.itemFormContainer}>
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
          </div>
          <div className={styles.itemFormContainer}>
            <FormInput type="email" name="email" label="Email" />
            <FormInput type="phone" name="phone" label="Phone" />
          </div>

          <FormInput
            label="Address"
            type="text"
            name="address"
            placeholder="Street Address"
          />

          <Row gutter={[16, 16]}>
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