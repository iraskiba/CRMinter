import { Avatar, Button } from 'antd'
import styles from './styles.module.scss'
import useCustomerStore from '@pages/customers/model/customers-store.ts'
import { ReactNode, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchCustomers } from '@pages/customers/api/api.tsx'
import DashboardTasks from '@pages/dashboard/ui/dashboard-tasks.tsx'
import { useNavigate } from 'react-router-dom'
export type CustomersProps = {
  name: string
  email: string
  icon: ReactNode
}
const DashboardCustomers = ({ icon }: CustomersProps) => {
  const navigate = useNavigate()
  const { customer, setCustomer } = useCustomerStore()
  const [viewAll, setViewAll] = useState(false)

  const handleEdit = (id: string) => {
    navigate(`/customers/${id}`)
  }
  const { data, error } = useQuery({
    queryKey: ['dashboardCustomers'],
    queryFn: () => fetchCustomers(1),
  })
  const handleView = () => {
    setViewAll((prevViewAll) => !prevViewAll)
  }
  const customerToShow = viewAll ? customer : customer.slice(0, 4)

  useEffect(() => {
    if (data) {
      setCustomer(data.content)
    }
  }, [data, setCustomer])

  if (error) {
    return <div>Error loading data</div>
  }

  return (
    <div className={styles.customersContainer}>
      <div className={styles.customersItemContainer}>
        <span className={styles.textTitle}>Customers</span>
        <Button
          onClick={handleView}
          className={styles.buttonTextStyle}
          type="text"
        >
          View All
        </Button>
      </div>
      {customerToShow.map((customer, index: number) => (
        <div key={index} className={styles.dashboardCustomersItem}>
          <Avatar size={50} {...customer.avatarProps} />

          <div className={styles.flexCustomersButtonEdit}>
            <div>
              <p className={styles.textTitle}>{customer.name}</p>
              <p className={styles.textDescription}>{customer.email}</p>
            </div>
            <div>
              <Button onClick={() => handleEdit(customer.id)} icon={icon} />
            </div>
          </div>
        </div>
      ))}
      <DashboardTasks />
    </div>
  )
}

export default DashboardCustomers
