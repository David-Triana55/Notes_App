import { createPortal } from 'react-dom'
import React from 'react'
import './Modal.css'
export function Modal ({ children }) {
  return createPortal(
    <div className='container-create-note'>
      {children}
    </div>,
    document.getElementById('add-note')
  )
}
