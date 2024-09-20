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
      <Row gutter={[48, 48]}>
        <Col span={4}>
          <Appoitment
            deal="Deal Name"
            description="This is a description of the deal."
            date="2024-08-29T10:00:00Z"
            priceInfo={100}
            count={50}
            countP={5}
          />
        </Col>
        <Col span={10}>
          <RecentDeals
            dealName={'319 Haul Road'}
            description={'Glenrock,WY'}
            priceInfo={'55555'}
            date={'Nov 14, 07:00 AM'}
          />
        </Col>

        <Col span={8}>
          <DashboardCustomers
            name={'Deanna Annis'}
            email={'deannannis@gmail.com'}
            icon={<EditOutlined />}
          />
        </Col>
      </Row>

      <Row gutter={[16, 24]}>
        <Col span={8}>
          <CountElement
            className={styles.gradientGreen}
            icon={<UsergroupDeleteOutlined />}
            title={'Customers'}
            count={100}
          />
          <CountElement
            className={styles.gradientPink}
            icon={<UsergroupDeleteOutlined />}
            title={'Deals'}
            count={100}
          />
        </Col>

        <Col span={8} />
        <Col span={8} />
      </Row>
    </>
  )
}

export default DashboardContent
