import { Button, Checkbox, Select, Table } from 'antd'
import styles from './styles.module.scss'
import {
  FilterOutlined,
  EditOutlined,
  PictureOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import EditTaskModal from '@pages/tasks/ui/edit-task-modal.tsx'
import { useQuery } from '@tanstack/react-query'
import { ColumnsType } from 'antd/es/table'
import { fetchCTasks } from '@pages/tasks/api/api.tsx'
import { ModalEvent } from '../../../process/modal/index.ts'
import { TasksTableType } from '@pages/tasks/types.ts'
import { usePaginationStore } from '@pages/customers'
import useTaskStore from '@pages/tasks/model/tasks-store.ts'

const columns: ColumnsType<TasksTableType> = [
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
const TasksTable = () => {
  const [totalCount, setTotalCount] = useState(0)
  const { params, setParams } = usePaginationStore()
  const { task, setTask } = useTaskStore()

  const { page, pageSize, sortBy, sortOrder } = params
  const { data, error, isLoading } = useQuery({
    queryKey: ['tasks', page, pageSize, sortBy, sortOrder],
    queryFn: () => fetchCTasks(page, sortBy, sortOrder),
  })

  useEffect(() => {
    if (data) {
      setTotalCount(data.totalCount ?? 0)
      setTask(data.content ?? [])
    }
  }, [data, setTask])

  if (error) {
    return <div>Error loading data</div>
  }

  const handleSortChange = (value: string) => {
    const [sortBy, sortOrder] = value.split('.') as [
      'creationDate' | 'dueDate',
      'asc' | 'desc',
    ]
    setParams({ sortBy, sortOrder })
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Total:{totalCount || 0} tasks </span>
        <div className={styles.containerButton}>
          <Button className={styles.button} type="default">
            Sort by:
            <Select
              popupMatchSelectWidth={false}
              options={[
                { value: 'creationDate.desc', label: 'Date Created ↓' },
                { value: 'creationDate.asc', label: 'Date Created ↑' },
                { value: 'dueDate.desc', label: 'Due Date ↓' },
                { value: 'dueDate.asc', label: 'Due Date ↑' },
              ]}
              defaultValue="creationDate.desc"
              style={{ marginLeft: 8 }}
              onChange={handleSortChange}
            />
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
        dataSource={task}
        pagination={false}
        loading={isLoading}
      />
      <div className={styles.wrapperButton}>
        <Button
          className={styles.loadMoreButton}
          onClick={() => setParams({ page: page + 1 })}
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default TasksTable
