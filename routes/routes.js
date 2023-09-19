import express from 'express'
const router = express.Router()

router.post('/login',login)
router.post('/register',register)
router.post('/addproduct',addProduct)
router.get('/fetchproducts',tokenCheck,fetchProducts)

export default router

import { login } from '../controller/loginCntroller.js'
import { register } from '../controller/registerController.js'
import { addProduct } from '../controller/productController.js'
import { fetchProducts } from '../controller/productController.js'

import { tokenCheck } from '../middlwares/authenticateToken.js'