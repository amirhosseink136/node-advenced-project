const express = require("express")
const router = express.Router()
const controller = require('./controller')


router.post(
  '',
  controller.dashbord.bind(this)//auto-bind don`t work try it later(use in the controller)

)

router.post(
  '/me',
  controller.me.bind(this)
)


module.exports = router;