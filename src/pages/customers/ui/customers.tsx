import { Button, Table } from 'antd'
import styles from './styles.module.scss'
import { FilterOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { usePaginationStore } from '@pages/customers'
import { Customer, fetchCustomers } from '@pages/customers/model/api.tsx'
import { CustomersColumns } from '@pages/customers'

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
        columns={CustomersColumns()}
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
