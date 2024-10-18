import { Avatar, AvatarProps } from 'antd'
import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

type LogoContainerProps = {
  icon: ReactNode
  title: string
  count: number
}

type Props = LogoContainerProps & AvatarProps

const CountElement: FC<Props> = ({
  icon,
  title,
  count,
  className,
  ...avatarProps
}) => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <h2>{count}</h2>
      </div>
      <div className={styles.avatarContainer}>
        <Avatar size={80} icon={icon} {...avatarProps} className={className} />
      </div>
    </div>
  )
}
export default CountElement
