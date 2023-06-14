import { paginationFileds } from './../../../constants/pagination'
import { AcademicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import { NextFunction, Request, Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import pick from '../../../shared/pick'
import { IAcademicSemester } from './academicSemester.interface'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    })
    next()
  }
)

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, ['searchTerm'])
    const paginationOptions = pick(req.query, paginationFileds)

    const result = await AcademicSemesterService.getAllSemesters(
      filters,
      paginationOptions
    )

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrived successfully!',
      meta: result.meta,
      data: result.data,
    })
    next()
  }
)

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
}
