import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    const res = await axios.get("http://localhost:3000/todos")
    //const json = await res.json()
    setTodos(res.data.todos)
  }

  useEffect(() => {
    // setInterval(() => {
    //   async function fetchData() {
    //     const res = await fetch("http://localhost:3000/todos")
    //     const json = await res.json()
    //     setTodos(json.todos)
    //   }
    
    //   fetchData();
    // }, 5000)

    fetchData();
  }, [])

  // async function fetchData() {
  //   const res = await fetch("http://localhost:3000/todos")
  //   const json = await res.json()
  //   setTodos(json.todos)
  // }

  // fetchData();

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
