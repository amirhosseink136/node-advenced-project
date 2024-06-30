const express = require("express");
let users = require("./users")
const {body, validationResult} = require("express-validator");
const { default: helmet } = require("helmet");
const config = require("config")
const app = express()
const morgan = require("morgan")
const debug = require("debug")("amir : main")
const userRouter = require("./routes/users")
const homeRouter = require("./routes/home")
const mongoose = require("mongoose")

const router = require("./src/routes")


app.use("amirhossein", router )
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(helmet())


mongoose.connect('mongodb://localhost:27017/amirproject')
.then(()=>{console.log("connected to mongodb")})
.catch((err)=>{console.log("couldn`t connect to mongodb")})

const userSchema = new mongoose.Schema({
  first_name : String,
  last_name : {type : String, Required : true , },
  favorites : [String],
  date : {type : Date , default : Date.now},
  admin : Boolean

})

const User = mongoose.model('User', userSchema);


async function createuser(){
  const user = new User({
    first_name : 'mahdyar',
    last_name : 'Karamzadeh' ,
    favorites : ["reading","swimming"],
    admin : false
  })

  const result = await user.save()
console.log(result)
}


async function getUsers() {
  const pageNumber = 1;
  const pageSize = 8;
  const users = await User.find()
  .skip((pageNumber - 1) * pageSize)
  .limit(pageSize)
  console.log(users);
}


async function updateUser(id){
  const user = await User.findById(id);
  if(!user) return;
  user.set({
    first_name: 'updated name',
    admin: true
  });

  const result = await user.save();
  console.log(result);
}


async function removeUser(id){
  const user = await User.findByIdAndRemove(id);
  console.log(user);
}


console.log("Aplication Name:" , config.get("name"));
console.log("Aplication Version:" , config.get("version"));
console.log("sms ip:" , config.get("sms.ip"));

const port = process.env.port || 3000;
app.listen(port, ()=>{console.log(`listening to port ${port}`)} )