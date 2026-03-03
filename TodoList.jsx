import TodoItem from "./TodoItem"

const TodoList = ({ todos, deleteTodo }) => {

    return (
        <div>
            {todos.map((todo, index) => (
                    <TodoItem 
                    key={index}
                    todo={todo}
                    index={index} 
                    deleteTodo={deleteTodo}/>
        ))}
    </div>
    )
}

export default TodoList