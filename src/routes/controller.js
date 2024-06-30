const {validationResult} = require('express-validator')

module.exports = class {
  constructor() {
  }

  validationBody(req,res){
    const result = validationResult(req)
    if(!result.isEmpty()){
      const errors = result.array();
      const message = [];
      errors.forEach(err => message.push(err.msg));
      res.status(400).json({
        message : 'validationerror',
        data : message
      })
      return false;
    }
    return true;
  }
  
  validate(req,res,next){
    if(!this.validationBody(req,res)){
      return
    }
    next()
  }
};