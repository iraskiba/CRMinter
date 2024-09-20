//import BASE_URL from '@shared/lib/axios.tsx'
import instance from '@shared/lib/axios.tsx'

type TaskFormValues = {
  complete: boolean
  dueDate: string
  description: string
}

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
//const dealAxios = instance
//dealAxios.defaults.baseURL = '/tasks'

export async function postTask(
  task: TaskFormValues,
): Promise<TasksTable | null> {
  try {
    const { data } = await instance.post<TasksTable>('/tasks', task)
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

//tasksAxios.defaults.baseURL = `${BASE_URL}/tasks`

//export const postTask = async (
//task: TaskFormValues,
//): Promise<TasksTable | null> => {
//try {
//const { data } = await tasksAxios.post<TasksTable>('', task)
// return data
//} catch (error) {
//console.error('Failed to fetch:', error)
//return null
// }
//}

export const fetchCTasks = async (currentPage: number) => {
  try {
    const { data } = await instance.post<PaginationResponse<TasksTable>>('/', {
      currentPage: currentPage - 1,
    })
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
    return null
  }
}
