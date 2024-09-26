import axios from 'axios'

const port = 3008

const baseUrl = `http://localhost:${port}/api/users`

export const createUser = async (newUser) => {
  const response = await axios.post(baseUrl, newUser)
  return response.data
}
