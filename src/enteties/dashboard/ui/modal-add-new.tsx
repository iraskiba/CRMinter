import { Button } from 'antd'
import {
  ShoppingOutlined,
  UsergroupDeleteOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import { ModalEvent } from '../../../process/modal/index.ts'
import AddDeals from '../../deals/ui/modal-add-deals.tsx'
import AddCustomer from '../../customers/ui/modal-add-customers.tsx'
import styles from './styles.module.scss'

const AddNew = () => {
  const openDealModal = () => {
    ModalEvent.open(<AddDeals />)
  }

  const openCustomerModal = () => {
    ModalEvent.open(<AddCustomer />)
  }
  return (
    <div className={styles.modalContainer}>
      <h2>Add New </h2>
      <Button
        icon={<ShoppingOutlined />}
        type="text"
        htmlType="submit"
        onClick={openDealModal}
      >
        Deal
        <ArrowRightOutlined />
      </Button>
      <Button
        icon={<UsergroupDeleteOutlined />}
        type="text"
        htmlType="submit"
        onClick={openCustomerModal}
      >
        Customer
        <ArrowRightOutlined />
      </Button>
    </div>
  )
}

export default AddNew
