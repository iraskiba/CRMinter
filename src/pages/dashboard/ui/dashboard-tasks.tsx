import { Button } from 'antd'
import styles from './styles.module.scss'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import useTaskStore from '@pages/tasks/model/tasks-store.ts'
import { fetchCTasks } from '@pages/tasks/api/api.tsx'
import { ArrowRightOutlined } from '@ant-design/icons'

const DashboardTasks = () => {
  const { task, setTask } = useTaskStore()
  const { data, error } = useQuery({
    queryKey: ['dashboardTasks'],
    queryFn: () => fetchCTasks(1),
  })

  useEffect(() => {
    if (data) {
      setTask(data.content)
    }
  }, [data, setTask])

  if (error) {
    return <div>Error loading data</div>
  }

  return (
    <div
      style={{
        border: 'solid,1px, #EAEEF4 ',
        padding: '24px',
        borderRadius: '30px',
        backgroundColor: '#F6FAFD',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '161px',
        }}
      >
        <span className={styles.textTitle}>Tasks To Do</span>
        <Button className={styles.buttonTextStyle} type="text">
          View All
        </Button>
      </div>
      {task.slice(0, 7).map((task, index: number) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <div style={{ display: 'flex', gap: '30px' }}>
            <p className={styles.textDescription}>{task.date}</p>
            <p className={styles.textTitle}>{task.tasks}</p>
          </div>
        </div>
      ))}
      <Button style={{ color: '#7E92A2' }} type="text">
        Add new task <ArrowRightOutlined />
      </Button>
    </div>
  )
}

export default DashboardTasks
