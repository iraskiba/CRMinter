type EventCallback = (...args: any[]) => void

const createEventBus = () => {
  const events: Record<string, Set<EventCallback>> = {}

  return {
    subscribe(event: string, callback: EventCallback) {
      if (!events[event]) {
        events[event] = new Set()
      }
      events[event].add(callback)
    },

    unsubscribe(event: string, callback: EventCallback) {
      if (!events[event]) return

      events[event].delete(callback)
    },

    emit(event: string, ...args: any) {
      if (!events[event]) return

      events[event].forEach((callback) => {
        callback(...args)
      })
    },
  }
}

export const eventBus = createEventBus()
