import React, { useState } from 'react'
// import { Togglable } from './Togglable.jsx'
// import PropTypes from 'prop-types'
import './LoginForm.css'
import { MdCancel } from 'react-icons/md'
import { login } from '../../services/login.js'
import { setToken } from '../../services/notes.js'
import { useStore } from '../../store/store.jsx'

export function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loginVisible = useStore(state => state.loginVisible)
  const setUser = useStore(state => state.setUser)
  const setLoginVisible = useStore(state => state.setLoginVisible)
  const [crendentialIncorrect, setCrendentialIncorrect] = useState(false)
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await login({ username, password })

      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )

      setToken(user.token)

      setUser(user)
      setLoginVisible(false)

      setUsername('')
      setPassword('')
    } catch (e) {
      setLoginVisible(true)
      setCrendentialIncorrect(true)
    }
  }

  const handleOpenFormLogin = () => {
    setLoginVisible(!loginVisible)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  return (
    <div className='container-form-login'>
      <form className='form-login' onSubmit={handleLogin}>
        <div className='container-form'>
          <MdCancel onClick={handleOpenFormLogin} className='container-form--icon' />
          <label htmlFor='user'>User</label>
          <input
            type='text'
            id='user'
            name='user'
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <button type='submit' id='form-login-button'>
            Login
          </button>
          {crendentialIncorrect && <p className='error-message'>Incorrect credentials</p>}
        </div>
      </form>
    </div>
  )
}
