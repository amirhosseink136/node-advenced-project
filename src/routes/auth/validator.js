const expressvalidator = require("express-validator")
const check = expressvalidator.check;

module.exports = new class{
  registervalidator(){
    return[
      check('email')
        .isEmail()
        .withMessage('email is invalid'),
      check('name')
        .not()
        .isEmpty()
        .withMessage('name cant be empty'),
      check('password')
        .not()
        .isEmpty()
        .withMessage('password cant be empty')
    ]
  }
  loginvalidator(){
    return[
      check('email')
        .isEmail()
        .withMessage('email is invalid'),
      check('password')
        .not()
        .isEmpty()
        .withMessage('password cant be empty')
    ]
  }

}