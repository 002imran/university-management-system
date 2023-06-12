import { Application } from 'express'
import express from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'
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

export default app
