const route = require("express").Router()

const { getAllTodos, addTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")

route
    .get("/get", getAllTodos)
    .post("/add", addTodo)
    .put("/update/:id", updateTodo)
    .delete("/delete/:id", deleteTodo)
module.exports = route
