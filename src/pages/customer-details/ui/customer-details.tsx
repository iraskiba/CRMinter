import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import FormInput from '@shared/ui/form-items/input'
import styles from './styles.module.scss'
import AvatarUpload from '@pages/customer-details/ui/avatar-upload.tsx'
import { Avatar, Button, Col, Row } from 'antd'
import { useState } from 'react'

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
  const [showMoreDeals, setShowMoreDeals] = useState(false)
  const showDeals = () => {
    setShowMoreDeals(true)
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }
  const mockDeals = [
    {
      avatar: 'A',
      title: '319 Haul Road,Saint Paul,MN',
      time: 'Nov 14, 09:00',
      price: '$6000',
    },
    {
      avatar: 'B',
      title: '3290 Levy Court,Lawrence,MA',
      time: 'Nov 14, 09:00',
      price: '$6000',
    },
    {
      avatar: 'С',
      title: '3290 Levy Court,Lawrence,MA',
      time: 'Nov 14, 09:00',
      price: '$6000',
    },
    {
      avatar: 'D',
      title: '3290 Levy Court,Lawrence,MA',
      time: 'Nov 14, 09:00',
      price: '$6000',
    },
    {
      avatar: 'E',
      title: '3290 Levy Court,Lawrence,MA',
      time: 'Nov 14, 09:00',
      price: '$6000',
    },
    {
      avatar: 'F',
      title: '3290 Levy Court,Lawrence,MA',
      time: 'Nov 14, 09:00',
      price: '$6000',
    },
    {
      avatar: 'G',
      title: '3290 Levy Court,Lawrence,MA',
      time: 'Nov 14, 09:00',
      price: '$6000',
    },
  ]

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
        <div className={styles.buttonc}>
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
