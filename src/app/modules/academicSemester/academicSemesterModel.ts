import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant'
import { Schema, model } from 'mongoose'
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface'

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
  },
  {
    timestamps: true,
  }
)

export const academicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
