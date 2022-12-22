import React, { useContext } from 'react';
import { completeTodo, deleteOneTodo} from '../actions/actions.js'
import { myContext } from '../App.js'
const TodoList = () => {

    const [state, dispatch] = useContext(myContext)

    // console.log(state.todosLosTodos)
    const changeCompleted = (idTodo) => {
        // console.log(idTodo)
        dispatch(completeTodo(idTodo));
    }

    const deleteTodo = (idTodo) => {
        dispatch(deleteOneTodo(idTodo))
    }
    
    // console.log(state.todos)
    // console.log(state.todos.length)
    // console.log(state.todosLosTodos)
    return (
        <ul // style={{listStyle: "none"}}
        >
                { 
                    (state.todosLosTodos.length && state.todosLosTodos.length > 0) ? 
                        state.todos.map((todo) => {
                            
                            return (
                                <div key={todo.id}>
                                    <li onClick={() => changeCompleted(todo.id) }
                                        key={todo.id}
                                        style={{
                                            textDecoration: todo.completed ? 'line-through': 'none',
                                            textDecorationColor: todo.completed ? 'green' : 'none',
                                            color: todo.completed ? 'green' : 'white'  
                                        }}
                                    > 
                                        {`${todo.id}- ${todo.todoName}  `}
                                        
                                    </li>
                                    <button style={{borderRadius: "30%"}} onClick={() => { deleteTodo(todo.id)} } >Borrar</button>
                                </div>
                            )
                        }) : 
                        <h2>Create your todo</h2>
                }
        </ul>
    );
}

export default TodoList;
