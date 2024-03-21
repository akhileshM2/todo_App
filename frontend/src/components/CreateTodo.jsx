import { useState } from "react";
import axios from "axios";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="Title" onChange={function(e) {
                setTitle(e.target.value)
            }}></input><br/>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="Description" onChange={function(e) {
                setDescription(e.target.value)
            }}></input><br/>

            <button style={{
                padding: 10,
                margin: 10
            }} onClick={() => {
                async function fetchValues() {
                    // const res = await fetch("http://localhost:3000/todo", {
                    //     method: "POST",
                    //     body : JSON.stringify({
                    //         title: title,
                    //         description: description
                    //     }),
                    await axios.post("http://localhost:3000/todo", {
                        title: title,
                        description: description
                    }, {
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    //await res.json()
                    alert("Todo added")
                }
                
                fetchValues();

            }}>Add Todo</button>
        </div>
    )
}