/* eslint-disable prettier/prettier */
import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'
import { AuthService } from './auth.service'

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body)
  sendResponse(res, {
    status: true,
    StatusCode: StatusCodes.CREATED,
    message: 'User created successfully',
    data: result,
  })
})

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body)
  sendResponse(res, {
    status: true,
    StatusCode: StatusCodes.CREATED,
    message: 'User Logged in successfully',
    token: result.token,
    data: result.verifiedUser,
  })
})

const getMyProfile = catchAsync(
  async (req: Request & { user?: { email: string } }, res: Response) => {
    const result = await AuthService.getMyProfile(req.user!)
    sendResponse(res, {
      status: true,
      StatusCode: StatusCodes.CREATED,
      message: 'Profile Get Successfully',
      data: result,
    })
  }
)

export const AuthController = {
  register,
  login,
  getMyProfile,
}
