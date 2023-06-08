import axiosInstance from '../axios.js'
import { LOGIN } from '@/constants/api_endpoint'

export async function login (email, password) {
  // const { email, password } = credentials

  const response = await axiosInstance.post(LOGIN, { username: email, password })

  return response
}
