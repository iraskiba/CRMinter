import { create } from 'zustand'
import { AvatarProps } from 'antd'
import { immer } from 'zustand/middleware/immer'

type Customer = {
  id: string
  name?: string
  email: string
  phone: string
  address: string
  avatar: string
  avatarProps?: AvatarProps
}

type CustomerStore = {
  customer: Customer[]
  setCustomer: (customer: Customer[]) => void
}

const useCustomerStore = create<CustomerStore>()(
  immer((set) => ({
    customer: [],
    setCustomer: (customer) =>
      set((state) => {
        state.customer = customer
      }),
  })),
)

export default useCustomerStore
