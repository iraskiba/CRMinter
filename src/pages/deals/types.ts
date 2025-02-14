import { AvatarProps } from 'antd'

export type Deal = {
  id?: string
  name: string
  area: string
  appointmentDate: string
  price: string
  status: string
  avatar?: string
  avatarProps?: AvatarProps
  creationDate: string
  dueDate: string
}
