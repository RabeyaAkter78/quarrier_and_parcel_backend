/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import User from '../modules/user/user.model'

const auth = (...RequiredRole: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('Authorization')
    if (!authHeader) {
      throw new Error('You are not Authorized')
    }
    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, config.jwt_secret!) as JwtPayload
    const { email, role } = decoded

    const user = await User.findOne({ email })

    if (!user) {
      throw new Error('User not found')
    }
    if (RequiredRole.length && !RequiredRole.includes(role)) {
      throw new Error('You are not Authorized')
    }
    req.user = decoded as JwtPayload
    next()
  })
}

export default auth
