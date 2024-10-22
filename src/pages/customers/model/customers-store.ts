import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Customer } from '@pages/customers/types.ts'

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
