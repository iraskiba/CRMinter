import { eventBus, EventCallback } from '@shared/lib/event-bus.ts'

const eventName = 'closeModal'

export const close = () => {
  eventBus.emit(eventName)
}
export const subscribeClose = (callback: EventCallback) => {
  eventBus.subscribe(eventName, callback)
}
export const unsubscribeClose = (callback: EventCallback) => {
  eventBus.unsubscribe(eventName, callback)
}
