import { useEffect } from 'react'
import { useStore } from '../store/store'

export const useGetNotes = () => {
  const user = useStore(state => state.user)
  const notes = useStore((state) => state.notes)

  const getNotes = useStore(state => state.getNotes) // array de notas que viene del servidor

  useEffect(() => {
    if (user !== null) { getNotes() }
  }, [user])

  return { notes, user }
}
