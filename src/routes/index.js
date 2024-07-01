const express = require("express")
const router = express.Router()
const authRouter = require('./auth')
const userRouter = require('./user')
const {isloggined} = require('../middlewares/auth') 

router.use('/auth',authRouter)

router.use('/user', isloggined , userRouter)

module.exports = router;