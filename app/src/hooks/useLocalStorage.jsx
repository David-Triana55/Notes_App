import { useEffect } from 'react'
import { setToken } from '../services/notes'
import { useStore } from '../store/store'

export const useLocalStorage = () => {
  const setUser = useStore(state => state.setUser)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const userStorage = JSON.parse(loggedUserJSON)
      setUser(userStorage)
      setToken(userStorage.token)
    }
  }, [])
}
