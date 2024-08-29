import { Avatar, Button, Table, AvatarProps } from 'antd'
import styles from './style.module.scss'
import {
  SearchOutlined,
  EditOutlined,
  PictureOutlined,
} from '@ant-design/icons'

const columns = [
  {
    title: <PictureOutlined />,
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
    title: 'Area',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: 'Appointment Date',
    dataIndex: 'appointmentDate',
    key: 'appointmentDate',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
  },
]

type Deal = {
  name: string
  area: string
  appointmentDate: string
  price: string
  status: string
  edit: React.ReactNode
  avatarProps?: AvatarProps
  render?: () => JSX.Element
}

const data: Deal[] = [
  {
    name: 'John Doe',
    area: '475 Spruce Drive',
    appointmentDate: '475 Spruce Drive',
    price: '300$',
    status: 'in progress',
    render: () => <Button icon={<EditOutlined />} />,
    avatarProps: {},
    edit: <Button icon={<EditOutlined />} />,
  },
]
const Deals = () => {
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
            icon={<SearchOutlined />}
          >
            Filter
          </Button>
        </div>
      </div>
      <Table
        className={styles.containerTable}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
    </div>
  )
}

export default Deals
