import { Modal } from '../Modal/Modal'
import './CreateNote.css'
import React, { useState } from 'react'

import { create } from '../../services/notes'
import { useStore } from '../../store/store'
export function CreateNote ({ onClick }) {
  const setNotes = useStore(state => state.setNotes)
  const notes = useStore(state => state.notes)

  const [checked, setChecked] = useState(false)
  const [content, setContent] = useState('')

  const submitNewNote = (e) => {
    e.preventDefault()
    if (content === '') return
    onClick()
    create({ content, important: checked })
      .then(newNote => {
        console.log('newNote', newNote)
        setNotes([...notes, newNote])
      })
      .catch(error => console.log(error))
    console.log('content', content)
    console.log('checked', checked)
  }

  const handleNote = (e) => {
    e.preventDefault()
    setContent(e.target.value)
  }
  return (
    <Modal>
      <div className='create-note'>
        <h2 className='modal-title'>Create a new note</h2>
        <form onSubmit={submitNewNote} className='modal-form'>
          <textarea onChange={handleNote} placeholder='Write your note...' maxLength='150' />
          <div className='container-input-checkbox'>
            <p>Important</p>
            <input
              onChange={() => setChecked(!checked)}
              checked={checked} type='checkbox'
            />

          </div>
          <button type='submit'>Create</button>
        </form>
      </div>
    </Modal>
  )
}
