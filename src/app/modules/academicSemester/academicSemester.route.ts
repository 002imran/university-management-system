import { AcademicSemesterValidation } from './academicSemester.validation'
import express from 'express'
// import { UserController } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
  // UserController.createUser
)

export const UserRoutes = router
