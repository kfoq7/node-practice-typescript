import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { generateJWT } from '../helpers/generate-JWT'
import { handleErrorResponse } from '../helpers/handleErrors'
import { userModel, roleModel } from '../models'
import { IUser } from '../types'

export const registerUser = async (
  req: Request<{}, {}, IUser>,
  res: Response
) => {
  const { password, role, ...data } = req.body

  try {
    const salt: string = bcrypt.genSaltSync(10)
    const hash: string = bcrypt.hashSync(password, salt)

    const assignedRole = await roleModel.findOne({ roleName: role || 'USER' })

    const newUser = await userModel.create({
      ...data,
      password: hash,
      role: assignedRole
    })

    res.status(201).json({
      message: 'User create successfully',
      newUser
    })
  } catch (error: any) {
    handleErrorResponse(res, 500, error)
  }
}

export const loginUser = async (req: Request<{}, {}, IUser>, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await userModel.findOne({ email })

    if (!user) {
      res.status(400).json({
        message: 'User not found'
      })
      return
    }

    if (!bcrypt.compareSync(password, user.password)) {
      res.status(400).json({
        message: 'Wrong password'
      })
      return
    }

    const token = await generateJWT({
      id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      role: user.role
    })

    res.status(200).json({
      message: 'User logged successfully',
      token,
      user: {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        avatar: user.avatar
      }
    })
  } catch (error: any) {
    handleErrorResponse(res, 500, error)
  }
}
