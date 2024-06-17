
const express = require('express')

const router = express.Router()


const {userController} = require("../controller")


router.get('/',(req,res) =>{

    res.send("all is well bhai !!")
})

console.log("routes")
router.post('/signup',userController.signUp)
router.post('/login',userController.logIn)
router.get("/getuserdetails",userController.verifyToken,userController.getUser)

module.exports = router
