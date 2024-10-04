import { create } from 'zustand'
import { AvatarProps } from 'antd'
import { immer } from 'zustand/middleware/immer'

type Customer = {
  id: string | null
  name?: string | null
  email?: string | null
  phone: string | null
  address: string | null
  avatar: string | null
  avatarProps?: AvatarProps
}

type CustomerStore = {
  customer: Customer[]
  setCustomer: (customer: Customer[]) => void
  updateCustomer: (id: string, updatedCustomer: Customer) => void
}

const useCustomerStore = create<CustomerStore>()(
  immer((set) => ({
    customer: [],
    setCustomer: (customer) =>
      set((state) => {
        state.customer = customer
      }),
    updateCustomer: (id, updatedCustomer) =>
      set((state) => {
        const customerIndex = state.customer.findIndex(
          (customer) => customer.id === id,
        )
        if (customerIndex !== -1) {
          state.customer[customerIndex] = {
            ...state.customer[customerIndex],
            ...updatedCustomer,
          }
        }
      }),
  })),
)

export default useCustomerStore
