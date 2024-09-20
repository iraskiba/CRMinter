import { AvatarProps, Button, Table, Avatar } from 'antd'
import styles from './styles.module.scss'
import { FilterOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { usePaginationStore } from '@pages/customers'
import { fetchCustomers } from '@pages/customers/api/api.tsx'
import { UserSwitchOutlined, EditOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'

type Customer = {
  id: string
  name: string
  email: string
  phone: number
  address: string
  avatar: string
  avatarProps?: AvatarProps
}

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
const Customers = () => {
  const navigate = useNavigate()
  const handleClick = (record: Customer) => {
    navigate(`/customers/${record.id}`)
  }

  const [totalCount, setTotalCount] = useState(0)
  const { params, setParams } = usePaginationStore()
  const { page, pageSize } = params
  const { data, error, isLoading } = useQuery({
    queryKey: ['customers', page, pageSize],
    queryFn: () => fetchCustomers(page),
  })

  useEffect(() => {
    if (data) {
      setTotalCount(data.totalCount)
    }
  }, [data])

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
        onRow={(record) => ({
          onClick: () => handleClick(record),
        })}
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
