// import
const express = require('express')
const mongoose = require('mongoose')

// globals
const MONGO = require('./variables.js')

const mongo_user = MONGO.mongo.mongo_user
const mongo_pwd = MONGO.mongo.mongo_pwd
const mongo_dbs = MONGO.mongo.mongo_dbs
const mongo_coll = MONGO.mongo.mongo_coll 

// connect to mongo
mongoose.connect(
  "mongodb+srv://${mongo_user}:<${mongo_pwd}>@cluster0.x8yyx.mongodb.net/${mongo_dbs}?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => console.log("connected to db")
)

// server
const app = express();

// import routes
const authRoutes = require("./routes/auth")


// route middlewares
app.use("/auth", authRoutes)


app.listen(3000, () => console.log("server is running..."))
