import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { avatarProps } from 'ant-design-vue/es/avatar'
import { Avatar, Button, Col, Row } from 'antd'
import { FC, FormEvent } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { DetailsProps } from '@pages/deal-details/types'
import { eventBus } from '@shared/lib/event-bus.ts'
import { FormInput } from '@shared/ui/form-items/input'
import DateInput from '@shared/ui/form-items/input/day-picker.tsx'
import styles from './styles.module.scss'

const DealDetails: FC<DetailsProps> = () => {
  const location = useLocation()
  const methods = useForm()

  const { deal } = location.state
  const handleSaveCustomer = () => {
    eventBus.emit('notification', {
      type: 'success',
      message: 'Activity Recorded',
    })
  }
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    methods.handleSubmit(handleSaveCustomer)()
  }
  return (
    <Row gutter={[24, 24]}>
      <Col span={17}>
        <div className={styles.customerInfoContainer}>
          <div className={styles.customerInfoItem}>
            <Avatar size={50} {...avatarProps} />
            <div>
              <p className={styles.customerInfoLabel}>Customer</p>
              <p className={styles.customerInfo}>{deal.name}</p>
            </div>
          </div>
          <div>
            <p className={styles.customerInfoLabel}>Email</p>
            <p className={styles.customerInfo}>{deal.email}</p>
          </div>
          <div>
            <p className={styles.customerInfoLabel}>Phone</p>
            <p className={styles.customerInfo}>{deal.phone}</p>
          </div>
        </div>
        <Row className={styles.containerTitle}>
          <div className={styles.containerInfo}>
            <div>
              <h2>{deal.name}</h2>
            </div>
            <div>
              <Button size="large" shape="circle">
                <DeleteOutlined className={styles.iconOutlined} />
              </Button>
              <Button size="large" shape="circle">
                <EditOutlined className={styles.iconOutlined} />
              </Button>
            </div>
          </div>
        </Row>
        <Row gutter={24}>
          <Col span={16}>
            <div className={styles.containerInfo}>
              <div>
                <p className={styles.customerInfoLabel}>Progress</p>
                <p className={styles.customerInfo}>{deal.status}</p>
              </div>
              <div>
                <p className={styles.customerInfoLabel}>Appointment Date</p>
                <p className={styles.customerInfo}>{deal.appointmentDate}</p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '96%',
              }}
            >
              <div>
                <p className={styles.customerInfoLabel}>Room Area</p>
                <p className={styles.customerInfo}>{deal.area}</p>
              </div>
              <div>
                <p className={styles.customerInfoLabel}>Number of people</p>
                <p className={styles.customerInfo}>{10}</p>
              </div>
            </div>

            <div className={styles.containerInfo}>
              <div>
                <p className={styles.customerInfoLabel}>Price</p>
                <p className={styles.customerInfo}>{deal.price}</p>
              </div>
              <div>
                <p className={styles.customerInfoLabel}>Room Access</p>
                <p className={styles.customerInfo}>{'Keys with doorman'}</p>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.emptyDiv}></div>
          </Col>
        </Row>
        <Row gutter={24}>
          <div>
            <p className={styles.customerInfoLabel}>Special Instructions</p>
            <p className={styles.customerInfoInstruction}>
              At risus viverra adipiscing at in tellus. Blandit massa enim nec
              dui nunc mattis. Lacus vel facilisis volutpat est velit.
            </p>
          </div>
        </Row>
      </Col>
      <Col className={styles.rightColumn} span={7}>
        <Row>
          <FormProvider {...methods}>
            <form className={styles.formContainer} onSubmit={onSubmit}>
              <h2>Record Activity</h2>
              <FormInput
                placeholder="Write your notes"
                type="text"
                name="description"
                label="Description"
              />
              <DateInput name="date" />
              <div className={styles.rightColumnForm}>
                <label>Images</label>
                <Button type="default">ADD</Button>
              </div>

              <div className={styles.buttonContainer}>
                <Button
                  className={styles.buttonSubmit}
                  type="primary"
                  htmlType="submit"
                >
                  Save
                </Button>
              </div>
            </form>
          </FormProvider>
        </Row>
        <Row className={styles.activityLogContainer}>
          <h2>Activity Log</h2>
          <div className={styles.activityLogItem}>
            <div className={styles.circleBlue}>
              <div className={styles.circleWhite}></div>
            </div>
            <div>
              <p>17 Nov 2021</p>
              <p>Installation or inspection of your thermostat</p>
            </div>
          </div>
        </Row>
      </Col>
    </Row>
  )
}
export default DealDetails
