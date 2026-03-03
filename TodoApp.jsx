import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import "../App.css";

const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => res.json())
        .then((data) => {

            const firstFive = data.slice(0, 5).map((todo) => todo.title);
        setTodos(firstFive);
        setLoading(false);
        });
    }, []);
// Adding a new Todo
    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };
// Deleating a Todo
    const deleteTodo = (id) => {
    const updated = todos.filter((_, i) => i !== id);
    setTodos(updated);
    };

    return (
        <div className="app-container">
        <h2>Todo App</h2>
        <h5>Total Todos: {todos.length}</h5>

        <div className="input-container">
            <input
            type="text"
            placeholder="Enter new Todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>

        {loading ? (
            <div className="loader"></div>
        ) : todos.length === 0 ? (<p>No Todos</p>) : 
        (<TodoList todos={todos} deleteTodo={deleteTodo} />)
        }
    </div>
);
};

export default TodoApp;