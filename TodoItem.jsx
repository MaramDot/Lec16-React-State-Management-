const TodoItem=({todo, index, deleteTodo})=>{
    return(
        <div className="todo-card">
        {todo}
        <button className="delete-btn" onClick={() => deleteTodo(index)}>
        X
        </button>
    </div>
    )
}
export default TodoItem