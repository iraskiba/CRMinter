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
import useCustomerStore from '@pages/customers/model/customers-store.ts'

type Customer = {
  id: string | null
  name?: string | null
  email: string | null
  phone: string | null
  address: string | null
  avatar: string | null
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

  const [totalCount, setTotalCount] = useState(0)
  const { params, setParams } = usePaginationStore()
  const { customer, setCustomer } = useCustomerStore()

  const { page, pageSize } = params
  const { data, error, isLoading } = useQuery({
    queryKey: ['customers', page, pageSize],
    queryFn: () => fetchCustomers(page),
  })

  useEffect(() => {
    if (data) {
      setTotalCount(data.totalCount)
      setCustomer(data.content)
    }
  }, [data, setCustomer])

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
        dataSource={customer}
        pagination={false}
        loading={isLoading}
        onRow={(record) => ({
          onClick: () =>
            navigate(`/customers/${record.id}`, {
              state: { customer: record },
            }),
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
