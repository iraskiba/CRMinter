import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import FormInput from '@shared/ui/form-items/input'
import styles from './styles.module.scss'
import AvatarUpload from '@pages/customer-details/ui'
import { Avatar, Button, Col, Row } from 'antd'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { zocker } from 'zocker'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CustomerScheme = z.object({
  avatar: z.string().length(1),
  title: z.string(),
  time: z.string(),
  price: z.number(),
})

const MockCustomer = zocker(CustomerScheme.array().length(5)).generate()

const SchemeCustomer = z.object({
  id: z.string(),
  firstName: z
    .string()
    .regex(/^[A-Za-z]+$/, 'Must contain only Latin letters')
    .nullable(),
  lastName: z
    .string()
    .regex(/^[A-Za-z]+$/, 'Must contain only Latin letters')
    .nullable(),
  avatar: z.string(),
  email: z.string().email('Email is not correct').nullable(),
  phone: z
    .string()
    .regex(
      /^\d{7,}$/,
      'Phone number must be at least 7 digits long and contain only numbers',
    )
    .nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  province: z.string().nullable().optional(),
  code: z.string().nullable().optional(),
})

type Customer = z.infer<typeof SchemeCustomer>

const CustomerDetails = () => {
  const { id } = useParams<{ id: string }>()

  const methods = useForm<Customer>({
    mode: 'onChange',
    resolver: zodResolver(SchemeCustomer),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      province: '',
      code: '',
    },
  })
  const {
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = methods

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const { data } = await axios.get<Customer>(
          `http://localhost:3001/customers/${id}`,
        )
        reset(data)
      } catch (error) {
        console.error('Error fetching customer data:', error)
      }
    }

    fetchCustomer()
  }, [id, reset])

  const [showMoreDeals, setShowMoreDeals] = useState(false)
  const showDeals = () => {
    setShowMoreDeals(true)
  }

  const onSubmit: SubmitHandler<Customer> = (data) => {
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
                  name="firstName"
                  placeholder="Barbara"
                />
                {!isValid && errors.firstName && (
                  <div style={{ color: 'red' }}>{errors.firstName.message}</div>
                )}
              </Col>
              <Col span={12}>
                <FormInput
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Anderson"
                />
                {!isValid && errors.lastName && (
                  <div style={{ color: 'red' }}>{errors.lastName.message}</div>
                )}
              </Col>

              <Col span={12}>
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="banderson@gmail.com"
                />
                {!isValid && errors.email && (
                  <div style={{ color: 'red' }}>{errors.email.message}</div>
                )}
              </Col>
              <Col span={12}>
                <FormInput
                  label="Phone"
                  type="tel"
                  name="phone"
                  placeholder="310-685-3335"
                />
                {!isValid && errors.phone && (
                  <div style={{ color: 'red' }}>{errors.phone.message}</div>
                )}
              </Col>

              <Col span={24}>
                <FormInput
                  label="Address"
                  type="text"
                  name="address"
                  placeholder="Street Address"
                />
              </Col>

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
          </form>
        </FormProvider>
      </Col>
      <Col className={styles.recentDeals} span={6}>
        <Row style={{ marginBottom: '24px' }} gutter={12}>
          <Col span={20}>
            <span>Recent Deals</span>
          </Col>
          <Col span={4}>
            <Button type="primary" shape="circle">
              +
            </Button>
          </Col>
        </Row>

        {(showMoreDeals ? MockCustomer : MockCustomer.slice(0, 3)).map(
          (deal, index) => (
            <div key={index} className={styles.deal}>
              <Row gutter={18}>
                <Col className={styles.avatarBlock} span={24}>
                  <Avatar size="large">{deal.avatar}</Avatar>
                  <span className={styles.dealsTitle}>{deal.title}</span>
                </Col>
                <Col span={12}>
                  <span className={styles.dealDetails}>{deal.time}</span>
                  <span className={styles.dealDetails}>{deal.price}</span>
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
