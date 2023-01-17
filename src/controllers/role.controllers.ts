import { Request, Response } from 'express'
import { handleErrorResponse } from '../helpers/handleErrors'
import { roleModel } from '../models'

export const registerRole = async (req: Request, res: Response) => {
  try {
    const role = await roleModel.create(req.body)

    res.status(201).json({
      message: 'Role created succefully',
      role
    })
  } catch (error: any) {
    handleErrorResponse(res, 500, error)
  }
}
