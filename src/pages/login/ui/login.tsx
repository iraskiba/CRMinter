import { TokenResponse, useGoogleLogin } from '@react-oauth/google'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import Paths from '@app/router/path.ts'
import useUserStore from '@pages/login/model/auth-store.ts'
import fetchUserInfo from '@pages/login/api/api.ts'

const Login = () => {
  const navigate = useNavigate()
  const { setUser } = useUserStore()

  const login = useGoogleLogin({
    onSuccess: async (response: TokenResponse) => {
      if ('access_token' in response) {
        console.log('successful authorisation, your token:', response)
        try {
          const userInfo = await fetchUserInfo(response.access_token)
          console.log('User Info:', userInfo)
          setUser({
            id: userInfo.id,
            name: userInfo.name,
            email: userInfo.email,
            avatar: userInfo.picture,
            accessToken: response.access_token,
          })
          navigate(Paths.home.path)
        } catch (error) {
          console.log('Error fetching user info:', error)
        }
      }
    },
    onError: () => {
      console.log('Login error')
    },
    flow: 'implicit',
  })

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Button onClick={() => login()} type="primary">
        Sign in with Google
      </Button>
    </div>
  )
}

export default Login
