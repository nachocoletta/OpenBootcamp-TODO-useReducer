import React, { useRef, useContext, useState } from 'react';
import { myContext } from '../App';
import { createTodo } from '../actions/actions.js'
import TodoFormFooter from './TodoFormFooter'
import TodoList from './TodoList';

const TodoForm = () => {
    
    const inputRef = useRef();
    const [state, dispatch] = useContext(myContext);
    const [stateButtonCreate, setStateButtonCreate] = useState(false);

    // console.log(state.todosLosTodos)
    const submit = (e) => {
        e.preventDefault();

        let text = inputRef.current.value;
        if(text.trim() === '')
        {
            throw new Error('No puede estar vacio')
        }
        let newId;
    
        // if(state.todos.length !== undefined)
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
        inputRef.current.value = ''
    }

    const habilitarOInhabilitarBotonCrearTarea = (botonPulsado) => {
        // console.log(botonPulsado)
        if(botonPulsado === 'todos')
            setStateButtonCreate(false);
        else if(botonPulsado === 'activos' || botonPulsado === 'completos')
            setStateButtonCreate(true)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type='text' ref={inputRef}/>
                <button disabled={stateButtonCreate} 
                        type='submit' 
                        // onClick={ () => {
                        //     alert('hola')
                        // }}
                        style={{margin: '2px'}
                        }>Create</button>
            </form>
            <TodoList></TodoList>
            <TodoFormFooter functionUpdateStatusButtonCreate={(boton) => habilitarOInhabilitarBotonCrearTarea(boton)}
                            action={stateButtonCreate}> </TodoFormFooter>
        </div>
    );
}

export default TodoForm;
