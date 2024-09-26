import { IoMdAddCircle } from 'react-icons/io'
import { useStore } from '../../store/store'
import * as React from 'react'

export function ButtonAddNote ({ modal, setModal }) {
  const user = useStore(state => state.user)
  return (
    <>
      {user && (
        <button
          type='button'
          className='open-modal'
          onClick={() => setModal(!modal)}
          style={{ fontSize: '60px', zIndex: 5 }}
        >
          <IoMdAddCircle />
        </button>
      )}
    </>
  )
}
