import React, { useState } from 'react'

export function NoteForm ({ addNote, handleLogout }) {
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: false
    }

    addNote(noteObject)
    setNewNote('')
  }

  return (
    <>
      <h3>Create a new note</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder='Write your note content'
          value={newNote}
          onChange={handleChange}
        />
        <button type='submit'>save</button>
      </form>
      <div>
        <button type='button' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  )
}
