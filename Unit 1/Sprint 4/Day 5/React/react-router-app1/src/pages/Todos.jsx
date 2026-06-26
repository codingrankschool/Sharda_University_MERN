import { useState, useEffect } from "react";

export default function Todos() {
  let [todos, setTodos] = useState([]);

  /*

Todo Object Structure

priority: "Low"
task: "Meet With Abhishek Sir"
updatedAt:"2026-06-26T09:31:51.135Z"
user: "Rohit"
_id: "6a3e47074353cf16ff7827f6"

  */

  let getTodos = async () => {
    let response = await fetch("http://localhost:8080/todos/");
    let data = await response.json();
    console.log(data);
    setTodos(data.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  let submitHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let todo = {
      task: formData.get("task"),
      priority: formData.get("priority"),
      user: formData.get("user"),
    };
    let response = await fetch("http://localhost:8080/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    let data = await response.json();
    console.log(data);
    getTodos();
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
      className="todo-form"
    >
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={submitHandler}
      >
        <input type="text" placeholder="Enter Task" name="task" />
        <input type="text" placeholder="Enter Priority" name="priority" />
        <input type="text" placeholder="Enter User" name="user" />
        <button type="submit">Add Todo</button>
      </form>

      <div
        style={{
          margin: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h2>Todos List</h2>
        <ul>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li style={{ marginBottom: "10px" , listStyleType: "none" , border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }} key={todo._id}>
                <strong>Task:</strong> {todo.task} <br />
                <strong>Priority:</strong> {todo.priority} <br />
                <strong>User:</strong> {todo.user} <br />
                <strong>Updated At:</strong>{" "}
              {new Date(todo.updatedAt).toLocaleString()}
            </li>
          ))
        ) : (
          <li>No todos available</li>
        )}
        </ul>
      </div>
    </div>
  );
}
