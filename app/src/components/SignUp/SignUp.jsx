import React, { useState } from 'react'
// import { Togglable } from './Togglable.jsx'
// import PropTypes from 'prop-types'
import './SignUp.css'
import { MdCancel } from 'react-icons/md'
import { createUser } from '../../services/create.js'
import { useStore } from '../../store/store.jsx'
export function SignUp ({ ...props }) {
  const signUpVisible = useStore(state => state.signUpVisible)
  const setSignUpVisible = useStore(state => state.setSignUpVisible)
  const loginVisible = useStore(state => state.loginVisible)
  const setLoginVisible = useStore(state => state.setLoginVisible)
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (username === '' || name === '' || password === '') {
      setError(true)
      return
    }

    createUser({ username, name, password })
    setName('')
    setUsername('')
    setPassword('')
    handleOpenFormSignUp()
    handleOpenFormLogin()
  }

  const handleOpenFormSignUp = () => {
    setSignUpVisible(!signUpVisible)
  }

  const handleOpenFormLogin = () => {
    setLoginVisible(!loginVisible)
  }
  return (
    <div className='container-form-sign-up'>
      <form className='form-sign-up' onSubmit={handleSubmit}>
        <div className='container-form-sign'>
          <MdCancel onClick={handleOpenFormSignUp} className='container-form--icon' />
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={handleNameChange}
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
            Sign Up
          </button>
          {error && <p className='error-message'>Empty field</p>}
        </div>
      </form>
    </div>
  )
}

// LoginForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   username: PropTypes.string

// }
