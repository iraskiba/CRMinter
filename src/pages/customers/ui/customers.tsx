import { Avatar, Button, Table, AvatarProps } from 'antd'
import styles from './styles.module.scss'
import { UserSwitchOutlined, EditOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'

const columns: ColumnsType<Customer> = [
  {
    title: <UserSwitchOutlined />,
    dataIndex: 'avatar',
    key: 'avatar',
    render: () => <Avatar size="large" />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
    render: (_, record) => <Button icon={<EditOutlined />} />,
  },
]

type Customer = {
  id: string
  name: string
  area: string
  appointmentDate: string
  price: string
  status: string
  avatarProps?: AvatarProps
}

const data: Customer[] = [
  {
    id: '1',
    name: 'John Doe',
    area: '475 Spruce Drive',
    appointmentDate: '475 Spruce Drive',
    price: '300$',
    status: 'in progress',
    avatarProps: {},
  },
]
const Customers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total: </span>
        <div className={styles.containerButton}>
          <Button className={styles.button} type="default">
            Sort by:
          </Button>
          <Button
            className={styles.button}
            type="default"
            icon={<UserSwitchOutlined />}
          >
            Filter
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} />
    </div>
  )
}

export default Customers
