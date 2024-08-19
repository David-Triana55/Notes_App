/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'
import { LoginForm } from './components/Login/LoginForm.jsx'
import { useGetNotes } from './hooks/useGetNotes.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.jsx'
import { Header } from './components/Header/Header.jsx'
import { CreateNote } from './components/CreateNote/CreateNote.jsx'
import { SignUp } from './components/SignUp/SignUp.jsx'
import { useStore } from './store/store.jsx'
import { Notes } from './components/notes/Notes.jsx'
import { ButtonAddNote } from './components/CreateNote/ButtonAddNote.jsx'

const App = () => {
  const userLocalStorage = useLocalStorage()
  const { notes, user } = useGetNotes()
  const loginVisible = useStore(state => state.loginVisible)
  const signUpVisible = useStore(state => state.signUpVisible)

  const [modal, setModal] = useState(false) // modal

  return (
    <main>
      <Header />
      {loginVisible && !user && <LoginForm />}
      {signUpVisible && <SignUp />}

      {notes?.length === 0 && user && <h2 className='no-notes'>No notes yet</h2>}
      {!loginVisible && !signUpVisible && !user && <h2 className='no-notes'>You need to login</h2>}

      <Notes />
      {modal && <CreateNote onClick={() => setModal(!modal)} />}
      <ButtonAddNote modal={modal} setModal={setModal} />

    </main>
  )
}

export default App
