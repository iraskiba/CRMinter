import { useEffect } from 'react'
import { notification } from 'antd'
import { eventBus } from '@shared/lib/event-bus.ts'
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons'

type NotificationType = 'success' | 'error' | 'info'
interface NotificationConfig {
  type: NotificationType
  message: string
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
}
const NotificationDisplay = () => {
  const openNotification = ({
    type,
    message,
    placement = 'topRight',
  }: NotificationConfig) => {
    const notificationConfig = {
      message: message || 'Unknown error',
      placement,
      className: `notification-${type}`,
    }

    const notificationTypes: Record<
      NotificationType,
      { method: typeof notification.success; icon: JSX.Element }
    > = {
      success: {
        method: notification.success,
        icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
      },
      error: {
        method: notification.error,
        icon: <DeleteOutlined style={{ color: '#ff4d4f' }} />,
      },
      info: {
        method: notification.info,
        icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
      },
    }

    const config = notificationTypes[type] || notificationTypes.info
    if (config.method) {
      config.method({
        ...notificationConfig,
        icon: config.icon,
      })
    }
  }

  useEffect(() => {
    const handleNotification = (config: NotificationConfig) =>
      openNotification(config)
    eventBus.subscribe('notification', handleNotification)
    return () => eventBus.unsubscribe('notification', handleNotification)
  }, [])

  return null
}

export default NotificationDisplay
