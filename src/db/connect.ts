import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Error connecting', error)
  }
}
