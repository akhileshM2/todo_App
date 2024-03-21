const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Akhilesh_admin:kinley%40123@cluster0.zjqaee1.mongodb.net/toDoApp");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todos = mongoose.model('Todos', todoSchema)

module.exports = {
    Todos
}
