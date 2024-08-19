import axios from 'axios'

const baseUrl = '/api/login'

// Las funciones `getAll`, `create`, `update`, `remove` funcionarían igual, solo que apuntando directamente a la URL completa

export const login = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}
