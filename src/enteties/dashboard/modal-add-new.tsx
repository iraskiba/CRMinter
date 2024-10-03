import { Button } from 'antd'
import {
  ShoppingOutlined,
  UsergroupDeleteOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import { ModalEvent } from '../../process/modal/index.ts'
import AddDeals, { Deal } from '../deals/ui/modal-add-deals.tsx'
import AddCustomer from '../customers/ui/modal-add-customers.tsx'

const AddNew = ({ deal }: { deal: Deal }) => {
  const openDealModal = () => {
    ModalEvent.open(<AddDeals deal={deal} />)
  }

  const openCustomerModal = () => {
    ModalEvent.open(<AddCustomer />)
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
