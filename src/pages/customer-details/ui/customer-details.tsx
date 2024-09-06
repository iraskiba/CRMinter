import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import FormInput from '@shared/ui/form-items/input'
import styles from './styles.module.scss'
import AvatarUpload from '@pages/customer-details/ui'
import { Avatar, Button, Col, Row } from 'antd'
import { useState } from 'react'
import mockDeals from '@pages/customer-details/mock/mock-deals.ts'

type Deal = {
  username: string | null
  user: string | null
  email: string | null
  phone: string | null
  address: string | null
  city: string | null
  province?: string | null
  code?: string | null
}
const CustomerDetails = () => {
  const methods = useForm<Deal>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      user: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      province: '',
      code: '',
    },
  })
  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods

  const [showMoreDeals, setShowMoreDeals] = useState(false)
  const showDeals = () => {
    setShowMoreDeals(true)
  }

  const onSubmit: SubmitHandler<Deal> = (data) => {
    console.log(data)
  }

  return (
    <Row gutter={24}>
      <Col span={18}>
        <AvatarUpload />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <FormInput
                  label="First Name"
                  type="text"
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'Only letters',
                    },
                  }}
                  name="username"
                  placeholder="Barbara"
                />
                {!isValid && errors.username && (
                  <div style={{ color: 'red' }}>{errors.username.message}</div>
                )}
              </Col>
              <Col span={12}>
                <FormInput
                  label="Last Name"
                  type="text"
                  name="user"
                  placeholder="Anderson"
                  required={true}
                />
              </Col>

              <Col span={12}>
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="banderson@gmail.com"
                  required={true}
                />
              </Col>
              <Col span={12}>
                <FormInput
                  label="Phone"
                  type="tel"
                  name="phone"
                  placeholder="310-685-3335"
                  required={true}
                />
              </Col>

              <Col span={24}>
                <FormInput
                  label="Address"
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  required={true}
                />
              </Col>

              <Col span={8}>
                <FormInput
                  type="text"
                  name="city"
                  placeholder="City"
                  required={true}
                />
              </Col>
              <Col span={8}>
                <FormInput
                  type="text"
                  name="province"
                  placeholder="State/ Province"
                  required={true}
                />
              </Col>
              <Col span={8}>
                <FormInput
                  type="text"
                  name="code"
                  placeholder="Zip Code"
                  required={true}
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

        {(showMoreDeals ? mockDeals : mockDeals.slice(0, 3)).map(
          (deal, index) => (
            <div key={index} className={styles.deal}>
              <Avatar size="large">{deal.avatar}</Avatar>
              <Row gutter={18}>
                <Col span={24}>
                  <span className={styles.dealsTitle}>{deal.title}</span>
                </Col>
                <Col span={12}>
                  <span>{deal.time}</span>
                  <span>{deal.price}</span>
                </Col>
              </Row>
            </div>
          ),
        )}
        <div className={styles.buttonLoadMore}>
          {!showMoreDeals && (
            <Button onClick={showDeals} type="text" className={styles.button}>
              Load More
            </Button>
          )}
        </div>
      </Col>
    </Row>
  )
}
export default CustomerDetails
