const express = require("express")
const router = express.Router()
const controller = require('./controller')
const validator = require('./validator')


router.post(
  '/register',
  validator.registervalidator(),
  controller.validate,
  controller.register.bind(this)//auto-bind don`t work try it later(use in the controller)

)

router.post(
  '/login',
  validator.loginvalidator(),
  controller.validate,
  controller.login.bind(this)
)


module.exports = router;