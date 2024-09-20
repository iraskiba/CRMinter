import { AvatarProps } from 'antd'
import { $api } from '@shared/lib/axios.tsx'
export type Customer = {
  id: string
  name: string
  email: string
  phone: number
  address: string
  avatar: string
  avatarProps?: AvatarProps
}

type PaginationResponse<T> = {
  page: number
  pageSize: number
  totalCount: number
  content: T[]
}

export const fetchCustomers = async (currentPage: number) => {
  try {
    const { data } = await $api.post<PaginationResponse<Customer>>(
      '/customers',
      {
        currentPage: currentPage - 1,
      },
    )
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
  }
}
