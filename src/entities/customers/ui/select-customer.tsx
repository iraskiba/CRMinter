import { ArrowRightOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import { useCustomerStore } from '@pages/customers'
import styles from './styles.module.scss'

const SelectCustomer = () => {
  const { customer } = useCustomerStore()

  return (
    <>
      <div className={styles.selectCustomerModal}>
        <h2>Select Customer</h2>
        <Button className={styles.textTitleSpace} type="text">
          Add New
        </Button>
      </div>
      {customer.slice(0, 6).map((customer, index: number) => (
        <div key={index} className={styles.customerItemBlock}>
          <Avatar size={50} {...customer.avatarProps} />

          <div className={styles.customerItem}>
            <div>
              <p className={styles.textTitle}>{customer.name}</p>
              <p className={styles.textDescriptionGrey}>{customer.email}</p>
            </div>
            <div>
              <Button icon={<ArrowRightOutlined />} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SelectCustomer
