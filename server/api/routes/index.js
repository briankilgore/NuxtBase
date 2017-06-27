import { Router } from 'express'

import users from './users'
import auth from './auth.js'

var router = Router()

// Add USERS Routes
router.use('/api/', users)

// Add AUTH Routes
router.use(auth)

export default router
