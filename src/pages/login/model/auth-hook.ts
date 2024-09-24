import useUserStore from '@pages/login/model/auth-store.ts'

const useIsAuthenticated = () => {
  const { user } = useUserStore()
  const accessToken = user?.accessToken || sessionStorage.getItem('accessToken')
  return !!accessToken
}

export default useIsAuthenticated
