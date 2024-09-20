import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api'

export const $api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
export const fetchInterceptors = () => {
  $api.interceptors.request.use(
    (config) => {
      console.log('Sent:', config)
      return config
    },
    (error) => {
      console.error('Error:', error)
      return Promise.reject(error)
    },
  )

  $api.interceptors.response.use(
    (response) => {
      if (response.status === 200) {
        console.log('Ok:', response.data)
      } else if (response.status === 201) {
        console.log('Created:', response.data)
      }
      return response
    },
    (error) => {
      console.error('Error response:', error)
      return Promise.reject(error)
    },
  )
}
