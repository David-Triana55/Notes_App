import bcrypt from 'bcrypt'
import express from 'express'

import userExtractor from '../middleware/userExtractor.js'
import { User } from '../models/User.js'
const usersRouter = express.Router()

// clase que nos permite crear un router de forma separada

usersRouter.post('/', async (req, res) => {
  try {
    const { body } = req
    const { username, name, password } = body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({
      username,
      name,
      passwordHash
    })
    // nos devuelve el usuario que acabamos de guardar
    const savedUser = await user.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(400).json(error)
  }
})

usersRouter.get('/', userExtractor, async (req, res) => {
  const { userId } = req
  const users = await User.findById(userId).populate('notes', {
    content: 1,
    important: 1,
    date: 1
  })
  res.json(users)
})

export default usersRouter
