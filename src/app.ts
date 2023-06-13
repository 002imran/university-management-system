import { Application, NextFunction, Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'
import httpStatus from 'http-status'
const app: Application = express()

app.use(cors())

//parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.get('env')

app.use('/api/v1', routes)

// app.use('/api/v1/users/', UserRoutes)
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes)

//testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
// Promise.reject(new Error('Unhaled Promise Rejection'))
// console.log(x)

// throw new Error('Testing new Error logger!')
// })

//global error handler
app.use(globalErrorHandler)

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
