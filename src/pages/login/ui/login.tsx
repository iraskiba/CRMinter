import { zodResolver } from '@hookform/resolvers/zod'
import { TokenResponse, useGoogleLogin } from '@react-oauth/google'
import { Button } from 'antd'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import Paths from '@app/router/path.ts'
import fetchUserInfo from '@pages/login/api/api.ts'
import useUserStore from '@pages/login/model/auth-store.ts'
import { $api } from '@shared/lib/axios.tsx'
import { FormInput } from '@shared/ui/form-items/input'
import styles from './styles.module.scss'

const SchemeLogin = z.object({
  email: z.string().email('Email is not correct'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

type LoginToken = z.infer<typeof SchemeLogin>

const Login = () => {
  const methods = useForm<LoginToken>({
    mode: 'onChange',
    resolver: zodResolver(SchemeLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods

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

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await $api.post('/tasks', data)
      if (response.data) {
        const result = response.data
        console.log('Login successful:', result)
        setUser({
          id: result.id,
          name: result.name,
          email: result.email,
          avatar: result.avatar,
          accessToken: result.accessToken,
        })
        navigate(Paths.home.path)
      } else {
        console.error('Login failed:', response.statusText)
      }
    } catch (error) {
      console.error('Failed to fetch:', error)
      return null
    }
  })

  return (
    <div className={styles.loginContainer}>
      <div>
        <FormProvider {...methods}>
          <form className={styles.formBlock} onSubmit={onSubmit}>
            <h2>Sign in to the work panel</h2>
            <FormInput label="Email" name="email" type="email" />
            {!isValid && errors.email && (
              <div style={{ color: 'red' }}>{errors.email.message}</div>
            )}
            <FormInput label="Password" name="password" type="password" />
            {!isValid && errors.password && (
              <div style={{ color: 'red' }}>{errors.password.message}</div>
            )}
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
      <Button onClick={() => login()} type="primary">
        Sign in with Google
      </Button>
    </div>
  )
}

export default Login
