import { $api } from '@shared/lib/axios.tsx'
import { Customer } from '@pages/customers/types.ts'

export type PaginationResponse<T> = {
  page: number
  pageSize: number
  totalCount: number
  content: T[]
}

export const fetchCustomers = async (
  currentPage: number,
  sortBy?: 'creationDate' | 'dueDate',
  sortOrder?: 'desc' | 'asc',
) => {
  try {
    const { data } = await $api.post<PaginationResponse<Customer>>(
      '/customers',
      {
        currentPage: currentPage - 1,
      },
    )

    return {
      ...data,
      content: data.content?.sort((a, b) => {
        if (!sortBy || !sortOrder) {
          return 0
        }
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
