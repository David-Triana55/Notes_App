import axios from 'axios'

const baseUrl = '/api/notes'
const getNoteUser = '/api/users/'

// Las funciones `getAll`, `create`, `update`, `remove` funcionarían igual, solo que apuntando directamente a la URL completa

let token = null

export const setToken = newToken => {
  token = `Bearer ${newToken}`
}

export const getAll = async () => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const response = await axios.get(getNoteUser, config)
  return response.data.notes
}

export const create = async (newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  // 1. url donde se envía la petición
  // 2. los datos que se envían en la petición
  // 3. la configuración de la petición
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

export const update = async (id, newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  // 1. URL: La URL del recurso que se va a actualizar.
  // 2. Data: Los datos que se envían en el cuerpo de la solicitud.
  // 3. Config: (Opcional) Un objeto de configuración que puede incluir encabezados y otras opciones.
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return response.data
}

export const remove = async (id) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  // 1. URL: La URL del recurso que se va a eliminar.
  // 2. Config: (Opcional) Un objeto de configuración que puede incluir encabezados y otras opciones.
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  console.log('response', response)
  return response.data
}
