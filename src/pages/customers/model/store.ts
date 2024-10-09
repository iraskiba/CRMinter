import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type SortBy = 'creationDate' | 'dueDate'
type SortOrder = 'desc' | 'asc'

type State = {
  params: {
    page: number
    pageSize: number
    sortBy: SortBy
    sortOrder: SortOrder
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
    sortBy: 'creationDate',
    sortOrder: 'desc',
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
