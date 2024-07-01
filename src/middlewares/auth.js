const User = require('./../models/user')
const jwt = require('jsonwebtoken')
const config = require('config')

async function isloggined(req,res,next){
  const token = req.header("x-auth-tokem");
  if(!token) { 
    res.status(401).send('access denied');
    
  }
  try{
    const code = jwt.verify(token, config.get("jwt_key"))
    await User.findById(code._id)
    console.log(user)
    req.user = user
  }
  catch(ex){
    res.status(400).send('invalid token')
  }

}

module.exports = {
  isloggined
}