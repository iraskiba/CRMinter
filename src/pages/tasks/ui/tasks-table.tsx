import { Button, Table } from 'antd'
import styles from './styles.module.scss'
import { FilterOutlined } from '@ant-design/icons'
import { useState } from 'react'
import EditTaskModal from '@pages/tasks/ui/edit-task-modal.tsx'
import TasksColumns from '@pages/tasks/ui/tasks-columns.tsx'

type TasksTable = {
  id: string
  date: string
  tasks: string | string[]
}

const data: TasksTable[] = [
  {
    id: '1',
    date: '14 Nov 2021',
    tasks: 'Task 1',
  },
]
const TasksTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleEdit = () => {
    setIsModalVisible(true)
  }

  const handleClose = () => {
    setIsModalVisible(false)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total: </span>
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
        columns={TasksColumns({ handleEdit })}
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
      <EditTaskModal visible={isModalVisible} onClose={handleClose} />
    </div>
  )
}

export default TasksTable
