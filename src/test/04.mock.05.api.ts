import { getUserInfo } from "./utils/request"

export const formatUserAge = async (name: string) => {
  const user = await getUserInfo(name)
  return `${user.name} ${user.age}`
}