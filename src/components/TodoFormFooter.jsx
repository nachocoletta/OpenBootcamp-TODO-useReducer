import React, {useRef, useContext} from 'react';
import { myContext } from '../App';
import { getAllTodos, getCompletedTodos, getInProgressTodos } from '../actions/actions.js'

const TodoFormFooter = () => {

    const inputRef = useRef();
    const [state, dispatch] = useContext(myContext);
    

    const showAllTodos = () => {
        dispatch( getAllTodos() )
    }

    const showCompletedTodos = () => {
        dispatch( getCompletedTodos() )
    }

    const showActiveTodos = () => {
        dispatch( getInProgressTodos() )
    }
    const submit = (e) => {

        e.preventDefault();
        alert(inputRef.current.value)
        console.log(state.todos)
    }

    return (
        <div>
            <button onClick={() => showAllTodos()} style={{cursor: 'pointer'}}> All Tasks </button>
            <button onClick={() => showActiveTodos()} style={{cursor: 'pointer'}}> In Progress </button>
            <button onClick={() => showCompletedTodos()} style={{cursor: 'pointer'}}> Completed </button>
            <form onSubmit={submit}>    
                <input type='text' placeholder='Nombre tarea...' ref={inputRef}/>
                <button type='submit'>Buscar</button>
            </form>
              
        </div>
    );
}

export default TodoFormFooter;
