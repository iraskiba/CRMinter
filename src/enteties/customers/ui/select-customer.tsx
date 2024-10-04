import { Avatar, Button } from 'antd'
import styles from './styles.module.scss'
import useCustomerStore from '@pages/customers/model/customers-store.ts'
import { ArrowRightOutlined } from '@ant-design/icons'

const SelectCustomer = () => {
  const { customer } = useCustomerStore()

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '200px',
        }}
      >
        <h2>Select Customer</h2>
        <Button className={styles.textTitleSpace} type="text">
          Add New
        </Button>
      </div>
      {customer.slice(0, 6).map((customer, index: number) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <Avatar size={50} {...customer.avatarProps} />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p className={styles.textTitle}>{customer.name}</p>
              <p className={styles.textDescription}>{customer.email}</p>
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
