import axios from 'axios'
import { getCookie } from 'cookie-universal-nuxt'

const axiosInstance = axios.create({
  baseURL: process.env.API_ENDPOINT
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
