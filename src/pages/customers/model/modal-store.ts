import { create } from 'zustand'
import TasksTable from '@pages/tasks'
type ModalStore = {
  isModalVisible: boolean
  modalData?: TasksTable | null
  showModal: () => void
  hiddenModal: () => void
}

const useModelStore = create<ModalStore>((set) => ({
  isModalVisible: false,
  modalData: null,
  showModal: (data?: TasksTable) =>
    set({ isModalVisible: true, modalData: data ?? null }),
  hiddenModal: () => set({ isModalVisible: false, modalData: null }),
}))
export default useModelStore
