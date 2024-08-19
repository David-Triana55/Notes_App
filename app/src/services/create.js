import axios from 'axios'

const baseUrl = '/api/users/'

export const createUser = async (newUser) => {
  const response = await axios.post(baseUrl, newUser)
  return response.data
}
