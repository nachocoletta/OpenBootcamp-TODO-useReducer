import React, {useRef, useContext, useState} from 'react';
import { myContext } from '../App';
import { getAllTodos, getCompletedTodos, getInProgressTodos } from '../actions/actions.js'

const TodoFormFooter = ({functionUpdateStatusButtonCreate, action}) => {

    const inputRef = useRef();
    const [state, dispatch] = useContext(myContext);
    const [disableShowActive, setDisableShowActive] = useState(false);
    const [disableShowAll, setDisableShowAll] = useState(true);
    const [disableShowCompleted, setDisableShowCompleted] = useState(false);

    // console.log(state)
    const showAllTodos = () => {
        // console.log(state)
        functionUpdateStatusButtonCreate('todos')
        dispatch( getAllTodos() )
    }

    const showCompletedTodos = () => {
        // console.log(state)
        // functionUpdateStatusButtonCreate(action)
        functionUpdateStatusButtonCreate('completos')
        dispatch( getCompletedTodos() )
    }

    const showActiveTodos = () => {
        // console.log(state)
        // functionUpdateStatusButtonCreate(action)
        functionUpdateStatusButtonCreate('activos')
        dispatch( getInProgressTodos() )
    }
    const submit = (e) => {
        e.preventDefault();
        // alert(inputRef.current.value)
        // console.log(state.todos)
    }

    const saberClick = (boton) => {
        if(boton ===  'mostarTodos'){
            console.log('mostar todos')
        } else if(boton === 'mostrarCompletos'){
            console.log('mostrar completos')
        }   
          else{
            console.log('mostrar en progreso')
          } 
    }
    return (
        <div>
            <button disabled={disableShowAll} onClick={(elemento) => {
                saberClick('mostarTodos');
                // functionUpdateStatusButtonCreate(action);
                showAllTodos(); 
                setDisableShowAll(!disableShowAll);
                setDisableShowActive(false);
                setDisableShowCompleted(false);
                }} 
                style={{cursor: 'pointer', margin:'2px'}}> All Tasks 
            </button>
            <button disabled={disableShowActive} onClick={() => {
                // functionUpdateStatusButtonCreate(action);
                saberClick('mostrarActivos');
                showActiveTodos();
                setDisableShowActive(!disableShowActive);
                setDisableShowAll(false);
                setDisableShowCompleted(false);
                }} 
                style={{cursor: 'pointer', margin:'2px'}}> In Progress 
            </button>
            <button disabled={disableShowCompleted} onClick={() => {
                // functionUpdateStatusButtonCreate(action);
                saberClick('mostrarCompletos');
                showCompletedTodos();
                setDisableShowActive(false);
                setDisableShowAll(false);
                setDisableShowCompleted(!disableShowCompleted);
                }} 
                style={{cursor: 'pointer', margin:'2px'}}> Completed </button>
            <form onSubmit={submit}>    
                <input type='text' placeholder='Nombre tarea...' ref={inputRef}/>
                <button type='submit' style={{margin: '2px'}}>Buscar</button>
            </form>
              
        </div>
    );
}

export default TodoFormFooter;
