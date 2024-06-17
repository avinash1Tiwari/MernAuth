const express = require('express')

const {ServerConfig} = require('./config')

const cookieParser = require('cookie-parser')

const app = express()


const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')

// call cokie as first middleware

app.use(cookieParser())

// middleware
app.use(bodyParser.json())

app.listen(ServerConfig.PORT,(req,res) => {
    console.log(`Successfully started the server at : ${ServerConfig.PORT}`)
})


const dbConnect = require('./config/database')

dbConnect()


console.log("api")

app.use('/api',userRoutes)
// jOvW76QAvZmrpAxc