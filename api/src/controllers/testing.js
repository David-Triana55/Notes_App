import express from 'express'
import { Note } from '../models/Note.js'
import { User } from '../models/User.js'

const testingRouter = express.Router()

testingRouter.post('/reset', async (req, res) => {
  await Note.deleteMany({})
  await User.deleteMany({})
  res.status(204).end()
})

export default testingRouter
