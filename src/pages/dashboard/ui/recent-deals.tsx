import { Avatar, AvatarProps, Button } from 'antd'
import dayjs from 'dayjs'
import { FC, useState } from 'react'
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
  const [viewAll, setViewAll] = useState(false)
  const handleView = () => {
    setViewAll((prev) => !prev)
  }
  const deals = [
    {
      dealName: '319 Haul Road',
      description: 'Prime location',
      date: '2023-09-18T10:00:00Z',
      priceInfo: '500,000',
      avatarProps,
    },
    {
      dealName: '456 Elm Street',
      description: 'Spacious and modern',
      date: '2023-09-17T14:30:00Z',
      priceInfo: '750,000',
      avatarProps,
    },
    {
      dealName: '789 Maple Avenue',
      description: 'Cozy and affordable',
      date: '2023-09-16T09:15:00Z',
      priceInfo: '300,000',
      avatarProps,
    },
    {
      dealName: '789 Maple Avenue',
      description: 'Cozy and affordable',
      date: '2023-09-16T09:15:00Z',
      priceInfo: '300,000',
      avatarProps,
    },
  ]
  const dealsToShow = viewAll ? deals : deals.slice(0, 3)

  return (
    <div className={styles.recentDealsContainer}>
      <div className={styles.containerDealItem}>
        <span className={styles.textTitle}>Recent Deals</span>
        <Button
          onClick={handleView}
          className={styles.buttonTextStyle}
          type="text"
        >
          View All
        </Button>
      </div>

      {dealsToShow.map((deal, index) => (
        <div key={index} className={styles.containerDealItem}>
          <div className={styles.dealItem}>
            <Avatar size={50} {...avatarProps} />
            <div>
              <p className={styles.textTitle}>{deal.dealName}</p>
              <p className={styles.textDescriptionGrey}>{deal.description}</p>
            </div>
          </div>

          <div>
            <p className={styles.textTitle}>{`$${deal.priceInfo}`}</p>
            <p className={styles.textDescriptionGrey}>{formattedDate}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default RecentDeals
