import { Types } from 'mongoose'

type TSex = 'Masculino' | 'Femenino'

export interface IRole {
  roleName: string
}

export interface IUser {
  firstName: string
  lastName: string
  age: number
  email: string
  password: string
  country: string
  isMarried: boolean
  sex: TSex
  avatar?: string | undefined
  role?: Types.ObjectId | string | undefined
}
