import { Request, Response, NextFunction } from 'express'
import { IGenericErrorMessage } from '../../interfaces/error'
import handleValidationError from '../../errors/handleValidationerror'
import config from '../../config'
import { error } from 'winston'
import ApiError from '../../errors/ApiError'

const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Something went wrong!!!!'
  let errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'validatoinError') {
    const simplefiedError = handleValidationError(err)
    statusCode = simplefiedError.statusCode
    message = simplefiedError.message
    errorMessages = simplefiedError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })

  next()
}

export default globalErrorHandler

//path:
//message
