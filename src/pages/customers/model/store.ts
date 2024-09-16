import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
  page: number
  pageSize: number
  totalCount: number
  sortByCreationDate: boolean
  sortByDueDate: boolean
}

type Actions = {
  setPage: (page: number) => void
  setPageSize: (pageSize: number) => void
  setTotalCount: (totalCount: number) => void
  setSortByCreationDate: (sort: boolean) => void
  setSortByDueDate: (sort: boolean) => void
}
const usePaginationStore = create<State & Actions>()(
  immer((set) => ({
    page: 1,
    pageSize: 7,
    totalCount: 0,
    sortByCreationDate: false,
    sortByDueDate: false,
    setPage: (page) =>
      set((state) => {
        state.page = page
      }),
    setPageSize: (pageSize) =>
      set((state) => {
        state.pageSize = pageSize
      }),
    setTotalCount: (totalCount) =>
      set((state) => {
        state.totalCount = totalCount
      }),
    setSortByCreationDate: (sort) =>
      set((state) => {
        state.sortByCreationDate = sort
        state.sortByDueDate = !sort
      }),
    setSortByDueDate: (sort) =>
      set((state) => {
        state.sortByDueDate = sort
        state.sortByCreationDate = !sort
      }),
  })),
)
export default usePaginationStore
