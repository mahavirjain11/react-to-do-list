import React from 'react'

function Todo( {text,todo,todos,setTodos}   ) {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id!==todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id===todo.id){
                return{
                    ...item , completed: !item.completed
                }
               
            }
            return item
        }))
    }

    return (
        <div className="todo">

            <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fas-check"></i>
            </button>

            <button onClick={deleteHandler} className="trash-btn ">
                <i className="fas fas-trash"></i>
            </button>
        </div>
    )
}

export default Todo
