import { Response } from 'express'

export const handleErrorResponse = (
  res: Response,
  statusCode: number,
  error: Error
) => {
  console.log('Error:', error)
  res.status(statusCode).json({
    message: 'Server error Response'
  })
}
