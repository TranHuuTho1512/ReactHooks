
const Todo = (props) => {
    // const todos = props.todos;
    const { todos, title, deleteDataTodo } = props;

    const handleDelete = (id) => {
        deleteDataTodo(id)
    }
    return (
        <div className="todos-container">
            <div className="title">
                {title}
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className="todos-child" >{todo.title}
                            &nbsp;&nbsp; <span onClick={() => handleDelete(todo.id)}>X</span>
                        </li>
                    </div>

                )
            })}
            <hr />

        </div>

    )
}
export default Todo;