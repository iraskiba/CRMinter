import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import FormInput from '@shared/ui/form-items/input'
import styles from './styles.module.scss'
import AvatarUpload from '@pages/customer-details/ui/avatar-upload.tsx'
import { Button, Col, Row } from 'antd'

type FormData = {
  username: string
  user: string
  email: string
  phone: string
  address: string
  city: string
  province: string
  code: string
}
const CustomerDetails = () => {
  const methods = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <Row gutter={24}>
      <Col span={18}>
        <AvatarUpload />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <FormInput
                  label="First Name"
                  type="text"
                  name="user"
                  placeholder="Barbara"
                  required={true}
                  defaultValue=""
                />
              </Col>
              <Col span={12}>
                <FormInput
                  label="Last Name"
                  type="text"
                  name="username"
                  placeholder="Anderson"
                  required={true}
                  defaultValue=""
                />
              </Col>

              <Col span={12}>
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="banderson@gmail.com"
                  required={true}
                  defaultValue=""
                />
              </Col>
              <Col span={12}>
                <FormInput
                  label="Phone"
                  type="tel"
                  name="phone"
                  placeholder="310-685-3335"
                  required={true}
                  defaultValue=""
                />
              </Col>

              <Col span={24}>
                <FormInput
                  label="Address"
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  required={true}
                  defaultValue=""
                />
              </Col>

              <Col span={8}>
                <FormInput
                  type="text"
                  name="city"
                  placeholder="City"
                  required={true}
                  defaultValue=""
                />
              </Col>
              <Col span={8}>
                <FormInput
                  type="text"
                  name="province"
                  placeholder="State/ Province"
                  required={true}
                  defaultValue=""
                />
              </Col>
              <Col span={8}>
                <FormInput
                  type="text"
                  name="code"
                  placeholder="Zip Code"
                  required={true}
                  defaultValue=""
                />
              </Col>
            </Row>
          </form>
        </FormProvider>
      </Col>
      <Col className={styles.recentDeals} span={6}>
        <Row gutter={12}>
          <Col span={20}>
            <span>Recent Deals</span>
          </Col>
          <Col span={4}>
            <Button type="primary" shape="circle">
              +
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
export default CustomerDetails
