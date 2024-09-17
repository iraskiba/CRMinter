import axios from 'axios'

type TaskFormValues = {
  complete: boolean
  dueDate: string
  description: string
}
export const postTask = async (task: TaskFormValues) => {
  const { data } = await axios.post('http://localhost:3001/tasks', task)
  return data
}
