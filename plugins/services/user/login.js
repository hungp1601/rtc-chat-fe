import axiosInstance from '../axios.js'
import { LOGIN } from '@/constants/api_endpoint'

export async function login (credentials) {
  const { email, password } = credentials

  const response = await axiosInstance.post(LOGIN, { email, password })
  console.log(response)
  return response
}
