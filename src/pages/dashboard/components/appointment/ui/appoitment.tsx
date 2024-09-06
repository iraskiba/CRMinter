import styles from './style.module.scss'
import { Avatar, AvatarProps, Button } from 'antd'
import { FC } from 'react'
import dayjs from 'dayjs'

type AppointmentProps = {
  deal: string
  description: string
  date: string
  priceInfo: number
  count: number
  countP: number
}

type Props = AppointmentProps & AvatarProps
const Appoitment: FC<Props> = ({
  deal,
  description,
  date,
  priceInfo,
  count,
  countP,
  ...avatarProps
}) => {
  const formattedDate = dayjs(date).format('MMM DD, YYYY HH:mm')
  return (
    <div className={styles.container}>
      <h3>Next Appointment</h3>
      <div className={styles.avatarBlock}>
        <Avatar size="large" {...avatarProps} />
        <div className={styles.deal}>
          <span>{deal}</span>
          <span>{description}</span>
        </div>
      </div>
      <div className={styles.common}>
        <span>Appointment Date</span>
        <span>{formattedDate}</span>
      </div>

      <div className={styles.details}>
        <div className={styles.common}>
          <span>Room Area</span>
          <span>{`${count} m²`}</span>
        </div>
        <div className={styles.common}>
          <span>People</span>
          <span>{countP}</span>
        </div>
      </div>

      <div className={styles.priceBlock}>
        <div className={styles.common}>
          <span>Price</span>
          <span>{`$${priceInfo}`}</span>
        </div>
        <Button className={styles.button} type="default">
          See Detail
        </Button>
      </div>
    </div>
  )
}
export default Appoitment
