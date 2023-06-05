import { Application, NextFunction, Request, Response, request } from 'express'
import express from 'express'
import cors from 'cors'
import usersService from './app/modules/users/users.service'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

//parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.get('env')

app.use('/api/v1/users/', usersRouter)

//testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Getting errorrr..!!')
// })

//global error handler
app.use(globalErrorHandler)

export default app
