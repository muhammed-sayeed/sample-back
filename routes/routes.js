import express from 'express'
const router = express.Router()

router.post('/login',login)
router.post('/register',register)

export default router

import { login } from '../controller/loginCntroller.js'
import { register } from '../controller/registerController.js'