import { Avatar, Button } from 'antd'
import styles from './styles.module.scss'
import useCustomerStore from '@pages/customers/model/customers-store.ts'
import { ReactNode, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchCustomers } from '@pages/customers/api/api.tsx'
import DashboardTasks from '@pages/dashboard/ui/dashboard-tasks.tsx'
export type CustomersProps = {
  name: string
  email: string
  icon: ReactNode
}
const DashboardCustomers = ({ icon }: CustomersProps) => {
  const { customer, setCustomer } = useCustomerStore()
  const { data, error, isLoading } = useQuery({
    queryKey: ['dashboardCustomers'],
    queryFn: () => fetchCustomers(1),
  })

  useEffect(() => {
    if (data) {
      setCustomer(data.content)
    }
  }, [data, setCustomer])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading data</div>
  }

  return (
    <div className={styles.customersContainer}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '217px',
        }}
      >
        <span className={styles.textTitle}>Customers</span>
        <Button className={styles.buttonTextStyle} type="text">
          View All
        </Button>
      </div>
      {customer.slice(0, 3).map((customer, index: number) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <Avatar size={50} {...customer.avatarProps} />

          <div className={styles.flexCustomersButtonEdit}>
            <div>
              <p className={styles.textTitle}>{customer.name}</p>
              <p className={styles.textDescription}>{customer.email}</p>
            </div>
            <div>
              <Button icon={icon} />
            </div>
          </div>
        </div>
      ))}
      <DashboardTasks />
    </div>
  )
}

export default DashboardCustomers
