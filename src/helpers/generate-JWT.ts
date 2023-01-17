import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'

interface IData {
  id: Types.ObjectId
  name: string
  role?: string | Types.ObjectId | undefined
}

export const generateJWT = (data: IData): Promise<string> => {
  return new Promise((resolve, reject) => {
    const secretKey = process.env.SECRET_KEY!

    const token = jwt.sign(data, secretKey, { expiresIn: '1d' })

    token ? resolve(token) : reject(new Error('Error en generar token'))
  })
}
