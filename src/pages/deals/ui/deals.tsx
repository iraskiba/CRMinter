import { Avatar, Button, Table, AvatarProps, Tag } from 'antd'
import styles from './style.module.scss'
import {
  FilterOutlined,
  EditOutlined,
  PictureOutlined,
} from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const columns: ColumnsType<Deal> = [
  {
    title: <PictureOutlined />,
    dataIndex: 'avatar',
    key: 'avatar',
    render: (_, { avatar, avatarProps }) => (
      <Avatar size="large" src={avatar} {...avatarProps} />
    ),
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
    render: (_, { status }) => {
      return <Tag className={styles.statusColor}>{status}</Tag>
    },
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
    render: () => <Button icon={<EditOutlined />} />,
  },
]

type Deal = {
  id: string
  name: string
  area: string
  appointmentDate: string
  price: string
  status: string
  avatar: string
  avatarProps?: AvatarProps
}

type PaginationResponse<T> = {
  page: number
  pageSize: number
  totalCount: number
  content: T[]
}

const fetchDeals = async (currentPage: number) => {
  const response = await axios.post<PaginationResponse<Deal>>(
    'http://localhost:3001/deals',
    { currentPage: currentPage - 1 },
  )
  return response.data
}
const Deals = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading } = useQuery({
    queryKey: ['deals', currentPage],
    queryFn: () => fetchDeals(currentPage),
  })

  if (error) {
    return <div>Error loading data</div>
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total: {data?.totalCount || 0} deals</span>
        <div className={styles.containerButton}>
          <Button className={styles.button} type="default">
            Sort by:
          </Button>
          <Button
            className={styles.button}
            type="default"
            icon={<FilterOutlined />}
          >
            Filter
          </Button>
        </div>
      </div>
      <Table
        className={styles.containerTable}
        columns={columns}
        dataSource={data?.content || []}
        pagination={false}
        loading={isLoading}
      />
      <div className={styles.wrapperButton}>
        <Button
          className={styles.loadMoreButton}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default Deals
