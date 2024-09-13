import { Avatar, AvatarProps, Button, Col, Row } from 'antd'
import dayjs from 'dayjs'
import { FC } from 'react'
import styles from './styles.module.scss'

type RecentDealProps = {
  dealName: string
  description: string
  date: string
  priceInfo: string
}

type Props = RecentDealProps & AvatarProps

const RecentDeals: FC<Props> = ({
  dealName,
  description,
  date,
  priceInfo,
  ...avatarProps
}) => {
  const formattedDate = dayjs(date).format('MMM DD, YYYY HH:mm')
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <span>Recent Deals</span>
          <Row gutter={[16, 24]}>
            <Col span={4}>
              <Avatar size={50} {...avatarProps} />
            </Col>

            <Col span={20}>
              <Row>
                <span className={styles.dealName}>{dealName}</span>
              </Row>
              <Row>
                <span className={styles.dealDescription}>{description}</span>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Button type="text">View All</Button>

          <Row>
            <span className={styles.dealName}>{`$${priceInfo}`}</span>
          </Row>
          <span className={styles.dealDescription}>{formattedDate}</span>
        </Col>
      </Row>
    </>
  )
}
export default RecentDeals
