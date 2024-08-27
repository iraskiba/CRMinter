import { Space, Avatar } from 'antd'
import styles from './styles.module.scss'
import type { GetProps } from 'antd'

interface LogoContainerProps {
  icon: React.ReactNode
  title: string
  count: number
}
type AvatarProps = GetProps<typeof Avatar>

type Props = LogoContainerProps & AvatarProps

const CountElement: React.FC<Props> = ({
  icon,
  title,
  count,
  ...avatarProps
}) => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <h1>{count}</h1>
      </div>
      <Space wrap size={16}>
        <Avatar size={64} icon={icon} {...avatarProps} />
      </Space>
    </div>
  )
}
export default CountElement
