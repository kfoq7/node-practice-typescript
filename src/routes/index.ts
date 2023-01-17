import express, { Application } from 'express'

import userRoter from './user.route'
import roleRoter from './role.route'

export const routerApi = (app: Application) => {
  const router = express.Router()

  app.use('/api', router)

  router.use('/user', userRoter)
  router.use('/role', roleRoter)
}
