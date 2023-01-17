import { Router } from 'express'
import { registerRole } from '../controllers/role.controllers'

const router = Router()

router.post('/', registerRole)

export default router
