import { Avatar, AvatarProps, Button } from 'antd'
import React, { FC } from 'react'
import styles from './styles.module.scss'
import { EditOutlined } from '@ant-design/icons'

type CustomersProps = {
  name: string
  email: string
  icon: React.ReactNode
}

type Props = CustomersProps & AvatarProps

const DashboardCustomers: FC<Props> = ({
  name,
  email,
  icon,
  ...avatarProps
}) => {
  const customers = [
    { name: 'John Doe', email: 'john@example.com', avatarProps },
    { name: 'Jane Smith', email: 'jane@example.com', avatarProps },
    { name: 'Alice Johnson', email: 'alice@example.com', avatarProps },
  ]
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '200px',
        }}
      >
        <span className={(styles.textTitle, styles.textTitleSpace)}>
          Customers
        </span>
        <Button className={styles.textTitleSpace} type="text">
          View All
        </Button>
      </div>
      {customers.map((customer, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <Avatar size={50} {...customer.avatarProps} />
          <div>
            <p className={styles.textTitle}>{customer.name}</p>
            <p className={styles.textDescription}>{customer.email}</p>
          </div>
          <Button icon={<EditOutlined />} />
        </div>
      ))}
    </>
  )
}

export default DashboardCustomers
