import axios from 'axios'

const createAxiosInstance = (baseURL: string) => {
  const axiosInstance = axios.create({
    baseURL: baseURL,
  })

  axiosInstance.interceptors.request.use(
    (config) => {
      console.log('Sent:', config)
      return config
    },
    (error) => {
      console.error('Error:', error)
      return Promise.reject(error)
    },
  )

  axiosInstance.interceptors.response.use(
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

  return axiosInstance
}

export default createAxiosInstance
