import { remove, update } from '../services/notes'
import { useStore } from '../store/store'

export function useNote (id) {
  const notes = useStore(state => state.notes)
  const setNotes = useStore(state => state.setNotes)

  const toggleImportance = (id) => {
    // encontramos la nota por su id
    const noteToChange = notes.find(n => n.idN === id)
    console.log('noteToChange', noteToChange)
    // creamos una copia de la nota y cambiamos su propiedad important
    const changedNote = { ...noteToChange, important: !noteToChange.important }

    // actualizamos la nota en el servidor
    // actualizamos la nota en el estado
    update(id, changedNote)
      .then(returnedNote => {
        const newNotes = notes.map(note => note.idN === id ? returnedNote : note)
        setNotes(newNotes)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const removeNote = (id) => {
    const note = notes.some(n => n.idN === id)

    if (note) {
      remove(id)
        .then(() => {
          setNotes(notes.filter(note => note.idN !== id))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return { toggleImportance, removeNote }
}
