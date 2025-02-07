const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api", require("./routes/todo.route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "Server Error ", err: err.message })
})

mongoose.connection.once("open", () => {
    console.log("MONGOOSE CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})