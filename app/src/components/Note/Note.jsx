import React from 'react'
import './Note.css'
import { MdStarOutline, MdOutlineStarPurple500 } from 'react-icons/md'
import { useNote } from '../../hooks/useNote'
import { ImCancelCircle } from 'react-icons/im'

export const Note = ({ note }) => {
  const { toggleImportance, removeNote } = useNote()

  const label = note.important
    ? <MdOutlineStarPurple500 className='icon-star-fill' />
    : <MdStarOutline className='icon-star' />

  return (
    <li className='note'>
      <div className='note-container-icons'>
        <button
          className='note-button--icon--star'
          type='button'
          onClick={() => toggleImportance(note.idN)}
        >
          {label}
        </button>
        <button
          className='note-button--icon--delete'
          type='button'
          onClick={() => removeNote(note.idN)}
        >
          <ImCancelCircle className='icon-delete' />
        </button>
      </div>
      <div className='note-content'>
        <p>{note.content}</p>
      </div>

    </li>
  )
}
