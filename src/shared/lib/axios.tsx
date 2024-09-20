import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3001'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})
instance.interceptors.request.use(
  (config) => {
    console.log('Sent:', config)
    return config
  },
  (error) => {
    console.error('Error:', error)
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
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

export default instance
