import { FilterOutlined } from '@ant-design/icons'
import { UserSwitchOutlined, EditOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Button, Table, Avatar, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePaginationStore } from '@pages/customers'
import { useCustomerStore } from '@pages/customers'
import { fetchCustomers } from '@pages/customers/api/api.tsx'
import { Customer } from '@pages/customers/types.ts'
import styles from './styles.module.scss'

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

  const { page, pageSize, sortBy, sortOrder } = params
  const { data, error, isLoading } = useQuery({
    queryKey: ['customers', page, pageSize, sortBy, sortOrder],

    queryFn: () => fetchCustomers(page, sortBy, sortOrder),
  })
  useEffect(() => {
    if (data) {
      setTotalCount(data.totalCount ?? 0)
      setCustomer(data.content ?? [])
    }
  }, [data, setCustomer])

  if (error) {
    return <div>Error loading data</div>
  }

  const handleSortChange = (value: string) => {
    const [sortBy, sortOrder] = value.split('.') as [
      'creationDate' | 'dueDate',
      'asc' | 'desc',
    ]
    setParams({ sortBy, sortOrder })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total: {totalCount || 0} customers</span>
        <div className={styles.containerButton}>
          <Button className={styles.button} type="default">
            Sort by:
            <Select
              popupMatchSelectWidth={false}
              options={[
                { value: 'creationDate.desc', label: 'Date Created ↓' },
                { value: 'creationDate.asc', label: 'Date Created ↑' },
                { value: 'dueDate.desc', label: 'Due Date ↓' },
                { value: 'dueDate.asc', label: 'Due Date ↑' },
              ]}
              defaultValue="creationDate.desc"
              style={{ marginLeft: 8 }}
              onChange={handleSortChange}
            />
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
