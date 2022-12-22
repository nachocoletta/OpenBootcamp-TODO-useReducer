import React, {useRef, useContext, useState} from 'react';
import { myContext } from '../App';
import { getAllTodos, getCompletedTodos, getInProgressTodos, filterAllTodos, filterActiveTodos,
    filterCompletedTodos } from '../actions/actions.js'

const TodoFormFooter = ({functionUpdateStatusButtonCreate, action}) => {

    const inputRef = useRef();
    const [state, dispatch] = useContext(myContext);
    const [disableShowActive, setDisableShowActive] = useState(false);
    const [disableShowAll, setDisableShowAll] = useState(true);
    const [disableShowCompleted, setDisableShowCompleted] = useState(false);
    const [inputFiltroTodo, setInputFiltroTodo] = useState('allTodos');

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

    // const saberClick = (boton) => {
    //     if(boton ===  'mostarTodos'){
    //         console.log('mostar todos')
    //     } else if(boton === 'mostrarCompletos'){
    //         console.log('mostrar completos')
    //     }   
    //       else{
    //         console.log('mostrar en progreso')
    //       } 
    // }

    const buscarTarea = (nombreTodo) => {
        // alert('hola')
        let tipoTodo = inputFiltroTodo;
               
// activeTodos - completedTodos
        switch(tipoTodo){
            case 'allTodos':
                dispatch( filterAllTodos(nombreTodo))
                // console.log('todos')
                break;
            case 'activeTodos':
                dispatch( filterActiveTodos(nombreTodo))
                // console.log('activos');
                break;
            case 'completedTodos':
                dispatch( filterCompletedTodos(nombreTodo))
                // console.log('completos');
                break;
            default:
                console.log('no entra nunca')
                break;
        }
        
    }

    const clearFilterInput = () => {
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    return (
        <div>
            <button disabled={disableShowAll} onClick={(elemento) => {
                // saberClick('mostarTodos');
                // functionUpdateStatusButtonCreate(action);
                clearFilterInput();
                setInputFiltroTodo('allTodos')
                showAllTodos(); 
                setDisableShowAll(!disableShowAll);
                setDisableShowActive(false);
                setDisableShowCompleted(false);
                }} 
                style={{cursor: 'pointer', margin:'2px'}}> All Tasks 
            </button>
            <button disabled={disableShowActive} onClick={() => {
                // functionUpdateStatusButtonCreate(action);
                // saberClick('mostrarActivos');
                clearFilterInput();
                setInputFiltroTodo('activeTodos')
                showActiveTodos();
                setDisableShowActive(!disableShowActive);
                setDisableShowAll(false);
                setDisableShowCompleted(false);
                }} 
                style={{cursor: 'pointer', margin:'2px'}}> In Progress 
            </button>
            <button disabled={disableShowCompleted} onClick={() => {
                // functionUpdateStatusButtonCreate(action);
                // saberClick('mostrarCompletos');
                clearFilterInput();
                setInputFiltroTodo('completedTodos')
                showCompletedTodos();
                setDisableShowActive(false);
                setDisableShowAll(false);
                setDisableShowCompleted(!disableShowCompleted);
                }} 
                style={{cursor: 'pointer', margin:'2px'}}> Completed </button>
            <br></br>
            <input type='text'  onChange={() => buscarTarea(inputRef.current.value)} placeholder='Filter your task...' ref={inputRef}/>
                {/* <button type='submit' style={{margin: '2px'}}>Buscar</button> */}
            
              
        </div>
    );
}

export default TodoFormFooter;
