import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type UserState = {
  user: {
    id: string
    name: string
    email: string
    avatar: string
    accessToken: string
  } | null
}

type UserActions = {
  setUser: (user: UserState['user']) => void
  resetUser: () => void
}

const initialUserState: UserState = {
  user: null,
}

const useUserStore = create<UserState & UserActions>()(
  immer((set) => ({
    ...initialUserState,
    setUser: (user) =>
      set((state) => {
        state.user = user
      }),
    resetUser: () =>
      set((state) => {
        state.user = initialUserState.user
      }),
  })),
)
export default useUserStore
