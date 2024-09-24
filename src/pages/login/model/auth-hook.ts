import useUserStore from '@pages/login/model/auth-store.ts'

const useIsAuthenticated = () => {
  const { user } = useUserStore()
  return !!user?.accessToken
}

export default useIsAuthenticated
