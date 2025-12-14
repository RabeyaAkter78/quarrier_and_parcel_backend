/* eslint-disable prettier/prettier */
import { Router } from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { userValidation } from '../user/userValidation'
import { AuthValidation } from './auth.validation'
import auth from '../../middlewares/auth'

const authRoute = Router()

authRoute.post(
  '/register',
  validateRequest(userValidation.userValidationSchema),
  AuthController.register
)

authRoute.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.login
)
authRoute.get('/me', auth(), AuthController.getMyProfile)

export default authRoute
