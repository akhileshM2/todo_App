const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todos } = require("./db");
const cors = require("cors");

const app = express()

const port = 3000;

app.use(express.json())
app.use(cors())

app.get("/todos", async function(req, res) {
    const todos = await Todos.find({})

    res.json({
        todos
    });
})

app.put("/completed", async function(req, res) {
    const createData = req.body
    const parsedData = updateTodo.safeParse(createData)

    if (!parsedData.success) {
        return res.status(411).json({
            msg: "Invalid inputs"
        })
    }

    await Todos.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo updated"
    })
})

app.post("/todo", async function(req, res) {
    const createData = req.body
    const parsedData = createTodo.safeParse(createData)

    if(!parsedData.success) {
        return res.status(411).json({
            msg: "Invalid inputs"
        })
    }
    
    const newTodo = await Todos.create({
        title: createData.title,
        description: createData.description,
        completed: false
    })

    res.json({
        msg: "Todo created!",
        newTodo: newTodo._id
    })
})

// app.delete("", function(req, res) {
    
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})