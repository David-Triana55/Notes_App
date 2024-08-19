import { useStore } from '../../store/store'
import { Note } from '../Note/Note'
import './Notes.css'
export function Notes () {
  const notes = useStore(state => state.notes)

  return (
    <ul className='container-notes'>
      {notes?.map((note) =>
        <Note
          key={note.idN}
          note={note}
        />
      )}
    </ul>

  )
}
