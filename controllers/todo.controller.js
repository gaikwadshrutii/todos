const asyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.getAllTodos = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "Todo Fetch Success", result })
})

exports.addTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo Add Success" })
})

exports.updateTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo update Success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo delete Success" })
})