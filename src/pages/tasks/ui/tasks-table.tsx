import { Button, Checkbox, Table } from 'antd'
import styles from './styles.module.scss'
import { FilterOutlined } from '@ant-design/icons'
import { useState } from 'react'
import EditTaskModal from '@pages/tasks/ui/edit-task-modal.tsx'
import { useQuery } from '@tanstack/react-query'
import useModelStore from '@pages/customers/model/modal-store.ts'
import { ColumnsType } from 'antd/es/table'
import { EditOutlined, PictureOutlined } from '@ant-design/icons'
import { fetchCTasks } from '@pages/tasks/api/api.tsx'

type TasksTable = {
  id: string
  date: string
  tasks: string
}

type ColumnsProps = {
  showModal: () => void
}

const columns: (props: ColumnsProps) => ColumnsType<TasksTable> = ({
  showModal,
}) => [
  {
    title: <PictureOutlined />,
    dataIndex: 'check',
    key: 'avatar',
    render: () => <Checkbox />,
  },
  {
    title: 'Due Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Tasks',
    dataIndex: 'tasks',
    key: 'tasks',
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
    render: () => <Button icon={<EditOutlined />} onClick={showModal} />,
  },
]

const TasksTable = () => {
  const { isModalVisible, showModal, hiddenModal } = useModelStore()
  const [currentPage, setCurrentPage] = useState(1)

  const { data, error, isLoading } = useQuery({
    queryKey: ['tasks', currentPage],
    queryFn: () => fetchCTasks(currentPage),
  })

  if (error) {
    return <div>Error loading data</div>
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
        columns={columns({ showModal })}
        dataSource={data?.content || []}
        pagination={false}
        loading={isLoading}
      />
      <EditTaskModal open={isModalVisible} onClose={hiddenModal} />
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
