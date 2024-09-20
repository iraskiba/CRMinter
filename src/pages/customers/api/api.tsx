import { AvatarProps } from 'antd'
import instance from '@shared/lib/axios.tsx'
import BASE_URL from '@shared/lib/axios.tsx'

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

const customersAxios = instance
customersAxios.defaults.baseURL = `${BASE_URL}/customers`
export const fetchCustomers = async (currentPage: number) => {
  try {
    const { data } = await customersAxios.post<PaginationResponse<Customer>>(
      '',
      {
        currentPage: currentPage - 1,
      },
    )
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
  }
}
