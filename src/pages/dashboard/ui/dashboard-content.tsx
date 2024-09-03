import Appoitment from '../components/appointment'
import CountElement from '@pages/dashboard/components/count-element'
import { UsergroupDeleteOutlined } from '@ant-design/icons'
import TasksModal from '@pages/tasks/ui/tasks-modal.tsx'

const DashboardContent = () => {
  return (
    <div>
      <Appoitment
        deal="Deal Name"
        description="This is a description of the deal."
        date="2024-08-29T10:00:00Z"
        priceInfo={100}
        count={50}
        countP={5}
      />
      <CountElement
        icon={<UsergroupDeleteOutlined />}
        title={'Customers'}
        count={100}
      />
      <div>
        <TasksModal visible={true} />
      </div>
    </div>
  )
}

export default DashboardContent
