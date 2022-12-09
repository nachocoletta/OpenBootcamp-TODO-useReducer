import React, { useRef, useContext } from 'react';
import { myContext } from '../App';
import { COMPLETE, CREATE_TODO } from '../actions/todoActionsTypes.js'
import { createTodo } from '../actions/actions.js'
const TodoForm = () => {
    
    const inputRef = useRef();
    const [state, dispatch] = useContext(myContext)

    const submit = (e) => {
        e.preventDefault();

        let newId;
        if(state.todos.length > 0){
            newId = state.todos[state.todos.length-1].id+1;
        }
        else {
            newId = 1;
        }
        // console.log(newId)
        const todo = {
            completed: false,
            id: newId,
            todoName: inputRef.current.value
        }
        if(isNaN(newId))
            newId = 1;
        else {
            dispatch( createTodo(todo) )
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type='text' ref={inputRef}/>
                <button type='submit'>Crear</button>
            </form>
        </div>
    );
}

export default TodoForm;
