import { Checkbox, Button, Table } from 'antd'
import styles from './styles.module.scss'
import {
  EditOutlined,
  FilterOutlined,
  PictureOutlined,
} from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'

const columns: ColumnsType<Tasks> = [
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
    render: () => <Button icon={<EditOutlined />} />,
  },
]

type Tasks = {
  id: string
  date: string
  tasks: string | string[]
}

const data: Tasks[] = [
  {
    id: '1',
    date: '14 Nov 2021',
    tasks: 'Task 1',
  },
]
const Tasks = () => {
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
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} />
    </div>
  )
}

export default Tasks
