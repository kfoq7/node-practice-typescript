import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    country: String,
    isMarried: {
      type: Boolean,
      required: true,
      default: false
    },
    sex: {
      type: String,
      required: true,
      enum: ['Masculino', 'Femenino']
    },
    avatar: String,
    role: {
      type: Schema.Types.ObjectId,
      ref: 'role'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

const User = mongoose.model('user', userSchema)

export default User
