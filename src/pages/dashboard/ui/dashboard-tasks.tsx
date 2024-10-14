import { Button } from 'antd'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useTaskStore from '@pages/tasks/model/tasks-store.ts'
import { fetchCTasks } from '@pages/tasks/api/api.tsx'
import { ArrowRightOutlined } from '@ant-design/icons'
import ModalAddTasks from '../../../enteties/tasks/ui/modal-add-tasks.tsx'
import { ModalEvent } from '../../../process/modal/index.ts'

const DashboardTasks = () => {
  const { task, setTask } = useTaskStore()
  const [viewAll, setViewAll] = useState(false)
  const { data, error } = useQuery({
    queryKey: ['dashboardTasks'],
    queryFn: () => fetchCTasks(1),
  })
  const handleView = () => {
    setViewAll((prevViewAll) => !prevViewAll)
  }
  const taskToShow = viewAll ? task : task.slice(0, 4)

  const openDealModalTask = () => {
    ModalEvent.open(<ModalAddTasks />)
  }
  useEffect(() => {
    if (data) {
      setTask(data.content)
    }
  }, [data, setTask])

  if (error) {
    return <div>Error loading data</div>
  }

  return (
    <div className={styles.tasksContainerDashboard}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '161px',
        }}
      >
        <span className={styles.textTitle}>Tasks To Do</span>
        <Button
          onClick={handleView}
          className={styles.buttonTextStyle}
          type="text"
        >
          View All
        </Button>
      </div>
      {taskToShow.map((task, index: number) => (
        <div key={index} className={styles.tasksBlock}>
          <div className={styles.taskItem}>
            <p className={styles.textDescription}>{task.date}</p>
            <p className={styles.textTitle}>{task.tasks}</p>
          </div>
        </div>
      ))}
      <Button
        className={styles.buttonAddNewTask}
        onClick={openDealModalTask}
        type="text"
      >
        Add new task <ArrowRightOutlined />
      </Button>
    </div>
  )
}

export default DashboardTasks
