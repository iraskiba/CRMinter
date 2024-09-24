import { create } from 'zustand'
type ModalStore = {
  isModalVisible: boolean
  showModal: () => void
  hiddenModal: () => void
}

const useModelStore = create<ModalStore>((set) => ({
  isModalVisible: false,
  showModal: () => set({ isModalVisible: true }),
  hiddenModal: () => set({ isModalVisible: false }),
}))
export default useModelStore
