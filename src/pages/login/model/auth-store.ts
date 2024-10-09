import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type State = {
  user: {
    id: string
    name: string
    email: string
    avatar: string
    accessToken: string
  } | null
}

type Actions = {
  setUser: (user: State['user']) => void
  resetUser: () => void
}

const initialUserState: State = {
  user: null,
}

const useUserStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialUserState,
      setUser: (user) =>
        set(() => ({
          user: user,
        })),
      resetUser: () =>
        set(() => ({
          user: initialUserState.user,
        })),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
export default useUserStore
