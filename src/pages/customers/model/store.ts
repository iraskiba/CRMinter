import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
  params: {
    page: number
    pageSize: number
    sortByCreationDate: boolean
    sortByDueDate: boolean
  }
}
type Actions = {
  setParams: (params: Partial<State['params']>) => void
  resetParams: () => void
}
const initialState: State = {
  params: {
    page: 1,
    pageSize: 7,
    sortByCreationDate: false,
    sortByDueDate: false,
  },
}

const usePaginationStore = create<State & Actions>()(
  immer((set) => ({
    ...initialState,
    setParams: (params) =>
      set((state) => {
        state.params = { ...state.params, ...params }
      }),
    resetParams: () =>
      set((state) => {
        state.params = initialState.params
      }),
  })),
)

export default usePaginationStore
