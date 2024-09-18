import { AvatarProps } from 'antd'
import createAxiosInstance from '@shared/lib/interceptors.tsx'
import BASE_URL from '@shared/constants.ts'

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
const dealsAxios = createAxiosInstance(`${BASE_URL}/deals`)

export const fetchDeals = async (currentPage: number) => {
  try {
    const { data } = await dealsAxios.post<PaginationResponse<Deal>>('', {
      currentPage: currentPage - 1,
    })
    return data
  } catch (error) {
    console.error('Failed to fetch:', error)
    return null
  }
}
