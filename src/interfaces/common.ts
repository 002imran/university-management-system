// eslint-disable-next-line consistent-type-definations
import { IGenericErrorMessage } from './error'

export type IGenericResponse<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}

export type IGenericErrorResponse = {
  statusCode: number | number
  message: string
  errorMessages: IGenericErrorMessage[]
}
