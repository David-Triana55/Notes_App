import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import loginRouter from './controllers/login.js'
import notesRouter from './controllers/notes.js'
import testingRouter from './controllers/testing.js'
import usersRouter from './controllers/users.js'
import { handleError } from './middleware/handleError.js'
import { notFound } from './middleware/notFound.js'
import { mongoDb } from './mongo.js'
import path from 'path'
import { fileURLToPath } from 'url'

// dotenv se usa para cargar las variables de entorno
dotenv.config()
const app = express()

mongoDb()
app.use(cors())
app.use(express.json())

// Obtener el directorio actual en un entorno de módulos ES
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const staticPath = path.join(__dirname, '../../app/dist/')
app.use(express.static(staticPath))

// Resto de tu configuración de Express

app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
  app.use('/api/testing', testingRouter)
}

// middleware not found enpoint
app.use(notFound)

// middleware para el error
app.use(handleError)

const { PORT, PORT_TEST, NODE_ENV } = process.env
const connection = NODE_ENV === 'test' ? PORT_TEST : PORT

export const server = app.listen(connection, () => {
  console.log(`Listening on port ${connection}`)
})

export default app
