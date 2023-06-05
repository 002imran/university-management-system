// eslint-disable-next-line consistent-type-definations
import { IGenericErrorMessage } from './error'

export type IGenericErrorResponse = {
  statusCode: number | number
  message: string
  errorMessages: IGenericErrorMessage[]
}
