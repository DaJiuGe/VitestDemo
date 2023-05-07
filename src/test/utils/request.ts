import axios from 'axios'

const request = axios.create({})

export const getUserInfo = async (name: string) => {
  const user = await request.get(`/api/user${name}`)
  return user.data
}