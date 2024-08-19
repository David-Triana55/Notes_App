import { useStore } from '../../store/store'
import './Header.css'
export const Header = () => {
  const user = useStore(state => state.user)
  const loginVisible = useStore(state => state.loginVisible)
  const signUpVisible = useStore(state => state.signUpVisible)
  const handleLogout = useStore(state => state.handleLogout)
  const setLoginVisible = useStore(state => state.setLoginVisible)
  const setSignUpVisible = useStore(state => state.setSignUpVisible)

  const render = () => {
    if (user) {
      return (
        <header>
          <nav>
            <h1 className='nav-title-main'>NOTES</h1>
            <div className='container-button-access'>
              <p className='container-button-access--user'>{user.name}</p>
              <button
                type='button'
                className='container-button-access--sign-out'
                onClick={handleLogout}
              >
                <img
                  className='icon-login'
                  src={`https://unavatar.io/github/${user.name}`}
                  alt=''
                />
              </button>
            </div>
          </nav>
        </header>
      )
    }
    return (
      <header>
        <nav>
          <h1 className='nav-title-main'>NOTES</h1>
          <div className='container-button-access'>
            {!loginVisible && (
              <button
                type='button'
                className='container-button-access--sign-in'
                onClick={() => setLoginVisible(true)}
              >
                Sign in
              </button>
            )}

            {!signUpVisible && (
              <button
                type='button'
                className='container-button-access--sign-up'
                onClick={() => setSignUpVisible(true)}
              >
                Sign up
              </button>)}
          </div>
        </nav>
      </header>
    )
  }

  return (
    <>
      {render()}
    </>
  )
}
