import { AvatarProps } from 'antd'

export type Customer = {
  id: string
  name?: string
  email: string
  phone: string
  address: string
  avatar: string
  avatarProps?: AvatarProps
  creationDate: string
  dueDate: string
}
