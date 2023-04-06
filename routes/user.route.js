const express = require(`express`)
const app = express()
app.use(express.json())
const userController =
require(`../controller/user.controller`)
app.get("/", userController.getAllUser)
app.post("/add", userController.addUser)
app.post("/login", userController.login)
app.post("/find", userController.findUser)
app.put("/:id", userController.updateUser)
app.delete("/:id", userController.deleteUser)
module.exports = app