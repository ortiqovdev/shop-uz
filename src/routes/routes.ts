import { Router } from "express";
import { createValidator } from 'express-joi-validation'
import { getIndex , getMyProduct,getAddProduct} from "../controllers/controllers";
import { getLogin,getRegister , postLogin , postRegister } from "../controllers/auth-controllers";
import { regsterJoi, loginJoi } from "../validations/auth-validation";

const router = Router()
const validator = createValidator()


router.get('/', getIndex)
router.get('/add', getAddProduct)
router.get('/my', getMyProduct)

// Auth part
router.get('/login', getLogin)
router.get('/register', getRegister)
router.post('/login', validator.body(loginJoi), postLogin)
router.post('/register',validator.body(regsterJoi), postRegister)

export default router;