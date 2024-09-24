import CustomButton from '@shared/ui/custom-button-plus'
import { FC, useState } from 'react'
import TasksModal from '@pages/tasks/ui/tasks-modal.tsx'

type TaskModalProps = {
  open: boolean
  onClose: () => void
}
const AddNewTask: FC<TaskModalProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleClose = () => {
    setIsModalVisible(false)
  }

  return (
    <div>
      <TasksModal open={isModalVisible} onClose={handleClose} />
      <CustomButton variant={'new'} onClick={showModal} />
    </div>
  )
}
export default AddNewTask
