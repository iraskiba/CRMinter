import { useState, useEffect, ReactNode } from 'react'
import { eventBus } from '@shared/lib/event-bus.ts'
import AddDeals from './modal-add-tasks.tsx'
import EditTaskModal from './edit-task-modal.tsx'

type ModalType = 'first' | 'second'
type ModalData = ReactNode

type ModalEvent = {
  modalType: ModalType
  modalData: ModalData
}
type EventCallback = (event: unknown) => void

const ModalManager = () => {
  const [modals, setModals] = useState<{
    [key in ModalType]: { isOpen: boolean; data: ModalData }
  }>({
    first: { isOpen: false, data: null },
    second: { isOpen: false, data: null },
  })

  const handleModal = (
    modalType: ModalType,
    isOpen: boolean,
    modalData: ModalData = null,
  ) => {
    setModals((prev) => ({
      ...prev,
      [modalType]: { isOpen, data: modalData },
    }))
  }

  useEffect(() => {
    const handleOpenModal: EventCallback = (event) => {
      const { modalType, modalData } = event as ModalEvent
      handleModal(modalType, true, modalData)
    }
    const handleCloseModal: EventCallback = (event) => {
      const modalType = event as ModalType
      handleModal(modalType, false)
    }

    eventBus.subscribe('openModal', handleOpenModal)
    eventBus.subscribe('closeModal', handleCloseModal)

    return () => {
      eventBus.unsubscribe('openModal', handleOpenModal)
      eventBus.unsubscribe('closeModal', handleCloseModal)
    }
  }, [])

  return (
    <>
      <AddDeals
        open={modals.first.isOpen}
        onClose={() => handleModal('first', false)}
      />
      <EditTaskModal
        open={modals.second.isOpen}
        onClose={() => handleModal('second', false)}
      />
    </>
  )
}

export default ModalManager
