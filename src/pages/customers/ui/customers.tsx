import { Avatar, Button, Table, AvatarProps } from 'antd'
import styles from './styles.module.scss'
import {
  UserSwitchOutlined,
  EditOutlined,
  FilterOutlined,
} from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { usePaginationStore } from '@pages/customers'

const columns: ColumnsType<Customer> = [
  {
    title: <UserSwitchOutlined />,
    dataIndex: 'avatar',
    key: 'avatar',
    render: (_, { avatar, avatarProps }) => {
      return <Avatar size="large" src={avatar} {...avatarProps} />
    },
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
    render: () => <Button icon={<EditOutlined />} />,
  },
]

type Customer = {
  id: string
  name: string
  email: string
  phone: number
  address: string
  avatar: string
  avatarProps?: AvatarProps
}

type PaginationResponse<T> = {
  page: number
  pageSize: number
  totalCount: number
  content: T[]
}

const fetchCustomers = async (currentPage: number) => {
  const response = await axios.post<PaginationResponse<Customer>>(
    'http://localhost:3001/customers',
    { currentPage: currentPage - 1 },
  )
  return response.data
}

const Customers = () => {
  const navigate = useNavigate()
  const handleClick = (record: Customer) => {
    navigate(`/customers/${record.id}`)
  }

  const { params, setParams } = usePaginationStore()
  const { page, pageSize, totalCount } = params
  const { data, error, isLoading } = useQuery({
    queryKey: ['customers', page, pageSize],
    queryFn: () => fetchCustomers(page),
  })

  useEffect(() => {
    if (data) {
      setParams({ totalCount: data.totalCount })
    }
  }, [data, setParams])

  if (error) {
    return <div>Error loading data</div>
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total: {totalCount || 0} customers</span>
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
        columns={columns}
        dataSource={data?.content || []}
        pagination={false}
        loading={isLoading}
        onRow={(record) => {
          return {
            onClick: () => handleClick(record),
          }
        }}
      />
      <div className={styles.wrapperButton}>
        <Button
          className={styles.loadMoreButton}
          onClick={() => setParams({ page: page + 1 })}
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default Customers
