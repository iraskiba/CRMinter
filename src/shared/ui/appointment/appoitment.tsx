import styles from './style.module.scss'
import { Avatar, AvatarProps, Button } from 'antd'
import { FC } from 'react'

type AppointmentProps = {
  icon: React.ReactNode
  deal: string
  description: string
  date: string
  priceInfo: number
  count: number
  countP: number
}

type Props = AppointmentProps & AvatarProps
const Appoitment: FC<Props> = ({
  icon,
  deal,
  description,
  date,
  priceInfo,
  count,
  countP,
  ...avatarProps
}) => {
  const parsedDate = new Date(date)
  const formattedDate = parsedDate.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  return (
    <div className={styles.container}>
      <div>
        <h2>Next Appointment</h2>
      </div>

      <div className={styles.avatarBlock}>
        <Avatar size="large" icon={icon} {...avatarProps} />
        <p>{deal}</p>
        <p>{description}</p>
      </div>

      <div>
        <p>Appointment Date</p>
        <p>{formattedDate}</p>
      </div>

      <div>
        <p>Room Area</p>
        <p>{`${count} m²`}</p>
        <p>People</p>
        <p>{countP}</p>
      </div>

      <div>
        <p>Price</p>
        <p>{`$${priceInfo}`}</p>
        <Button className={styles.button} type="default">
          See Detail
        </Button>
      </div>
    </div>
  )
}
export default Appoitment
