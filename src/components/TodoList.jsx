import React, { useContext } from 'react';
import { completeTodo, deleteOneTodo} from '../actions/actions.js'
import { myContext } from '../App.js'
const TodoList = () => {

    const [state, dispatch] = useContext(myContext)

    const changeCompleted = (idTodo) => {
        // console.log(idTodo)
        dispatch(completeTodo(idTodo));
    }

    const deleteTodo = (idTodo) => {
        dispatch(deleteOneTodo(idTodo))
    }
    
    return (
        <ul>
            
                { state.todos.map((todo) => {
                  
                    return(
                        <div key={todo.id}>
                            <li onClick={() => {alert('click'); changeCompleted(todo.id)}}
                                key={todo.id}
                                style={{
                                    textDecoration: todo.completed ? 'line-through': 'none',
                                    textDecorationColor: todo.completed ? 'green' : 'none',
                                    color: todo.completed ? 'green' : 'white'  
                                }}
                            > 
                                {`${todo.id}- ${todo.todoName}`}
                                
                            </li>
                            <button 
                                
                                    onClick={() => {
                                    
                                    // alert(todo.id)
                                    deleteTodo(todo.id)}} >x</button>
                        </div>
                    )
                })}
            
        </ul>
    );
}

export default TodoList;