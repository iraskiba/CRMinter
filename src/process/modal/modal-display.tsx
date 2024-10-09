import { ReactNode, useEffect, useState } from 'react'
import CustomModal from '@shared/modal.tsx'
import { ModalEvent } from '../modal/index.ts'

interface ModalConfig {
  children: ReactNode
}

const ModalDisplay = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode>(null)
  const openModal = (config: ModalConfig) => {
    setIsOpen(true)
    setModalContent(config.children)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalContent(null)
  }

  useEffect(() => {
    const handleOpenModal = (config: ModalConfig) => openModal(config)
    ModalEvent.subscribeOpen(handleOpenModal)
    return () => {
      ModalEvent.unsubscribeOpen(handleOpenModal)
    }
  }, [])

  useEffect(() => {
    const handleCloseModal = () => closeModal()
    ModalEvent.subscribeClose(handleCloseModal)

    return () => {
      ModalEvent.unsubscribeOpen(handleCloseModal)
    }
  }, [])
  if (!isOpen) {
    return null
  }
  return (
    <>
      <CustomModal open={isOpen} onClose={closeModal}>
        {modalContent}
      </CustomModal>
    </>
  )
}

export default ModalDisplay
