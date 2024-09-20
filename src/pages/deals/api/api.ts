import { AvatarProps } from 'antd'
import { $api } from '@shared/lib/axios.tsx'

type Deal = {
  id: string
  name: string
  area: string
  appointmentDate: string
  price: string
  status: string
  avatar: string
  avatarProps?: AvatarProps
}

type PaginationResponse<T> = {
  page: number
  pageSize: number
  totalCount: number
  content: T[]
}

export const fetchDeals = async (currentPage: number) => {
  try {
    const { data } = await $api.post<PaginationResponse<Deal>>('/deals', {
      currentPage: currentPage - 1,
    })
    return data
  } catch (error) {
    console.error('Failed to fetch deals:', error)
    return null
  }
}
