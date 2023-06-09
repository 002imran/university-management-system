import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes'
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { StudentRoutes } from '../modules/student/student.route'
import { UserRoutes } from './../modules/users/user.route'
import express from 'express'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

// router.use('/users/', UserRoutes)
// router.use('/academic-semesters', AcademicSemesterRoutes)

export default router
