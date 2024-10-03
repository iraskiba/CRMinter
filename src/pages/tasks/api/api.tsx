import { $api } from '@shared/lib/axios.tsx'

type TaskFormValues = {
  id: string
  date: string
  tasks: string
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

export const postTask = async (
  task: TaskFormValues,
): Promise<TasksTable | null> => {
  try {
    const { data } = await $api.post<TasksTable>('/tasks', task)
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
    return null
  }
}

export const fetchCTasks = async (currentPage: number) => {
  try {
    const { data } = await $api.post<PaginationResponse<TasksTable>>('/tasks', {
      currentPage: currentPage - 1,
    })
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
    return null
  }
}
