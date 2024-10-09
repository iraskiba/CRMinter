import { $api } from '@shared/lib/axios.tsx'
import {
  PaginationResponse,
  TaskFormValues,
  TasksTableType,
} from '@pages/tasks/types.ts'

export const postTask = async (
  task: TaskFormValues,
): Promise<TasksTableType | null> => {
  try {
    const { data } = await $api.post<TasksTableType>('/tasks', task)
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
    return null
  }
}

export const fetchCTasks = async (
  currentPage: number,
  sortBy: 'creationDate' | 'dueDate',
  sortOrder: 'desc' | 'asc',
) => {
  try {
    const { data } = await $api.post<PaginationResponse<TasksTableType>>(
      '/tasks',
      {
        currentPage: currentPage - 1,
      },
    )
    return {
      ...data,
      content: data.content?.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortBy] > b[sortBy] ? 1 : -1
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1
        }
      }),
    }
  } catch (error) {
    console.error('Failed to fetch:', error)
  }
}
