import axios from 'axios'
// import { getCookie } from 'cookie-universal-nuxt'

const axiosInstance = axios.create({
  baseURL: process.env.API_ENDPOINT || 'localhost:3000/api'
})

export default axiosInstance
