import { eventBus, EventCallback } from '@shared/lib/event-bus.ts'
import { ReactNode } from 'react'

const eventName = 'openModal'

export const open = (children: ReactNode) => {
  eventBus.emit(eventName, {
    children,
  })
}
export const subscribeOpen = (callback: EventCallback) => {
  eventBus.subscribe(eventName, callback)
}
export const unsubscribeOpen = (callback: EventCallback) => {
  eventBus.unsubscribe(eventName, callback)
}
