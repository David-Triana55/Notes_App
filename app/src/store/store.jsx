import { create } from 'zustand'
import { getAll, setToken } from '../services/notes'

export const useStore = create((set, get) => ({
  notes: [],
  user: null,
  showAll: true,
  signUpVisible: false,
  loginVisible: true,

  getNotes: async () => {
    const notes = await getAll()
    set({ notes })
  },

  setNotes: (notes) => set({ notes }),

  setUser: (user) => set({ user }),

  setLoginVisible: (visible) => {
    if (visible === true) {
      set({ signUpVisible: false })
    }
    set({ loginVisible: visible })
  },

  setSignUpVisible: (signUpVisible) => {
    if (signUpVisible === true) {
      set({ loginVisible: false })
    }
    set({ signUpVisible })
  },

  handleLogout: () => {
    set({ user: null })
    set({ notes: [] })
    set({ loginVisible: true })
    setToken(null)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

}))
