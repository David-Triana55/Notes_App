import axios from 'axios'
const port = 3008

const baseUrl = `http://localhost:${port}/api/login`

// Las funciones `getAll`, `create`, `update`, `remove` funcionarían igual, solo que apuntando directamente a la URL completa

export const login = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}
