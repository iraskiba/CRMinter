import useUserStore from '@pages/login/model/auth-store.ts'

const useIsAuthenticated = () => {
  const { user } = useUserStore()
  const accessToken = user?.accessToken
  return !!accessToken
}

export default useIsAuthenticated
