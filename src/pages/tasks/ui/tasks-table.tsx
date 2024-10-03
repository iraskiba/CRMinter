import { Button, Checkbox, Table } from 'antd'
import styles from './styles.module.scss'
import {
  FilterOutlined,
  EditOutlined,
  PictureOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import EditTaskModal from '@pages/tasks/ui/edit-task-modal.tsx'
import { useQuery } from '@tanstack/react-query'
import { ColumnsType } from 'antd/es/table'
import { fetchCTasks } from '@pages/tasks/api/api.tsx'
import { ModalEvent } from '../../../process/modal/index.ts'

type TasksTable = {
  id: string
  date: string
  tasks: string
}

const TasksTable = () => {
  const columns: ColumnsType<TasksTable> = [
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
      render: (_, record) => (
        <Button
          icon={<EditOutlined />}
          onClick={() => {
            ModalEvent.open(<EditTaskModal task={record} />)
          }}
        />
      ),
    },
  ]
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
        columns={columns}
        dataSource={data?.content || []}
        pagination={false}
        loading={isLoading}
      />
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
