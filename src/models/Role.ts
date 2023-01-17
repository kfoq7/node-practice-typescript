import mongoose from 'mongoose'
import { IRole } from '../types'

const roleSchema = new mongoose.Schema<IRole>(
  {
    roleName: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

const Role = mongoose.model('role', roleSchema)

export default Role
