// server
const express = require("express")

const app = express();

// import routes
const authRoutes = require("./routes/auth")

// route middlewares
app.use("/auth", authRoutes)


app.listen(3000, () => console.log("server is running..."))