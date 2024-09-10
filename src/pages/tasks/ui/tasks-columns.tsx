import { ColumnsType } from 'antd/es/table'
import { Checkbox, Button } from 'antd'
import { EditOutlined, PictureOutlined } from '@ant-design/icons'

type TasksTable = {
  id: string
  date: string
  tasks: string | string[]
}

type ColumnsProps = {
  handleEdit: () => void
}

const TasksColumns: (props: ColumnsProps) => ColumnsType<TasksTable> = ({
  handleEdit,
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
    render: () => <Button icon={<EditOutlined />} onClick={handleEdit} />,
  },
]
export default TasksColumns
