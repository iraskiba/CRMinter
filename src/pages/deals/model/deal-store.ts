import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import DealStore from '@pages/deals/model/deal-store.ts'
import { Deal } from '@pages/deals/types.ts'

type DealStore = {
  deal: Deal[]
  setDeal: (deal: Deal[]) => void
  updateDeal: (id: string, updateDeal: Deal) => void
}

const useDealStore = create<DealStore>()(
  immer((set) => ({
    deal: [],
    setDeal: (deal) =>
      set((state) => {
        state.deal = deal
      }),
    updateDeal: (id, updateDeal) =>
      set((state) => {
        const dealIndex = state.deal.findIndex((deal) => deal.id === id)
        if (dealIndex !== -1) {
          state.deal[dealIndex] = {
            ...state.deal[dealIndex],
            ...updateDeal,
          }
        }
      }),
  })),
)

export default useDealStore
