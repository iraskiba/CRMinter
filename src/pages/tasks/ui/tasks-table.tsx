import { Button, Table } from 'antd'
import styles from './styles.module.scss'
import { FilterOutlined } from '@ant-design/icons'
import { useState } from 'react'
import EditTaskModal from '@pages/tasks/ui/edit-task-modal.tsx'
import TasksColumns from '@pages/tasks/ui/tasks-columns.tsx'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type TasksTable = {
  id: string
  date: string
  tasks: string
}

type PaginationResponse<T> = {
  page: number
  pageSize: number
  totalCount: number
  content: T[]
}
const fetchCTasks = async (currentPage: number) => {
  const response = await axios.post<PaginationResponse<TasksTable>>(
    'http://localhost:3001/tasks',
    { currentPage: currentPage - 1 },
  )
  return response.data
}

const TasksTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const { data, error, isLoading } = useQuery({
    queryKey: ['tasks', currentPage],
    queryFn: () => fetchCTasks(currentPage),
  })

  if (error) {
    return <div>Error loading data</div>
  }
  const handleEdit = () => {
    setIsModalVisible(true)
  }

  const handleClose = () => {
    setIsModalVisible(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total:{data?.totalCount || 0} tasks </span>
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
        dataSource={data?.content || []}
        pagination={false}
        loading={isLoading}
      />
      <EditTaskModal visible={isModalVisible} onClose={handleClose} />
      <div className={styles.wrapperButton}>
        <Button
          className={styles.loadMoreButton}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default TasksTable
