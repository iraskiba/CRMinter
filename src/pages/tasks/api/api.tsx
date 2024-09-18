import createAxiosInstance from '@shared/lib/interceptors.tsx'
import BASE_URL from '@shared/constants.ts'

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

const tasksAxios = createAxiosInstance(`${BASE_URL}/tasks`)

export const postTask = async (
  task: TaskFormValues,
): Promise<TasksTable | null> => {
  try {
    const { data } = await tasksAxios.post<TasksTable>('', task)
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
    return null
  }
}

export const fetchCTasks = async (currentPage: number) => {
  try {
    const { data } = await tasksAxios.post<PaginationResponse<TasksTable>>('', {
      currentPage: currentPage - 1,
    })
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
    return null
  }
}
