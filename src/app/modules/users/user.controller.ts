import { RequestHandler } from 'express-serve-static-core'
import { Request, Response } from 'express'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { user } = req.body
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfulyy',
      data: result,
    })
  }
)

export const UserController = {
  createUser,
}
