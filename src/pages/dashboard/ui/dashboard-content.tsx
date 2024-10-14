import Appoitment from './appoitment.tsx'
import CountElement from './count-element.tsx'
import { EditOutlined, UsergroupDeleteOutlined } from '@ant-design/icons'
import styles from './styles.module.scss'
import { Col, Row } from 'antd'
import RecentDeals from './recent-deals.tsx'
import DashboardCustomers from '@pages/dashboard/ui/dashboard-customers.tsx'

const DashboardContent = () => {
  return (
    <>
      <Row gutter={[36, 24]}>
        <Col span={6}>
          <Row style={{ marginBottom: '24px' }}>
            <Appoitment
              deal="Deal Name"
              description="This is a description of the deal."
              date="2024-08-29T10:00:00Z"
              priceInfo={100}
              count={50}
              countP={5}
            />
          </Row>
          <Row style={{ marginBottom: '24px' }}>
            <CountElement
              className={styles.gradientGreen}
              icon={<UsergroupDeleteOutlined />}
              title={'Customers'}
              count={100}
            />
          </Row>
          <Row>
            <CountElement
              className={styles.gradientPink}
              icon={<UsergroupDeleteOutlined />}
              title={'Deals'}
              count={100}
            />
          </Row>
        </Col>

        <Col span={10}>
          <Row>
            <RecentDeals
              dealName={'319 Haul Road'}
              description={'Glenrock,WY'}
              priceInfo={'55555'}
              date={'Nov 14, 07:00 AM'}
            />
          </Row>

          <Row>test</Row>
        </Col>
        <Col span={8}>
          <Row>
            <DashboardCustomers
              name={'Deanna Annis'}
              email={'deannannis@gmail.com'}
              icon={<EditOutlined />}
            />
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default DashboardContent
