// import
const express = require('express');
const mongoose = require('mongoose');

// globals
dotenv.config();

// connect to mongo
mongoose.connect(
  process.env.MONGO_CONNECTION_STR,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => console.log("connected to db")
)

// server
const app = express();

// routes
app.use("/auth", (req, res)=>{
  res.json({message: "Hello"});
})

app.listen(3000, () => console.log("server is running..."));

