import { COMPLETE, GET_ALL_TODOS, CREATE_TODO, DELETE,
GET_COMPLETED_TODOS, GET_IN_PROGRESS_TODOS, FILTER_ALL_TODOS, FILTER_ACTIVE_TODOS, FILTER_COMPLETED_TODOS} from '../actions/todoActionsTypes'



export const todoReducer = (state, action) => {


    switch(action.type){
        case GET_ALL_TODOS:

            return {
                ...state,
                // todos: state.todos
                todos: state.todosLosTodos.map((todo, index) => { return {...todo}
                } )
            }
            
        case GET_COMPLETED_TODOS:
            // console.log(action.payload)
            


            // console.log(arrayCompleted)
            // console.log(state.todos)

            return {
                ...state,
                // todos: arrayCompleted
                // todos: state.todos
                // todos: state.todos.filter( (todo) => todo.completed)
                todos: state.todosLosTodos.filter((todo) => todo.completed === true )
            }

        case GET_IN_PROGRESS_TODOS:
            console.log(state)
            return {
                ...state,
                todos: state.todosLosTodos.filter( (todo) => !todo.completed)
            }

        case CREATE_TODO:
            return (
                {
                    ...state,
                    todos: [...state.todos, action.payload],
                    todosLosTodos: [...state.todos, action.payload]
                }
            )
        case DELETE:

            let arrayFiltrado = state.todosLosTodos.filter((todo) => todo.id !== action.payload)
        
        
            let arrayDeleted = arrayFiltrado.filter((todo) => {
                // console.log(`todo ${todo.id} payload ${action.payload}`);
                return todo.id !== action.payload
                }
            );
        
            // let arrayDeleted = state.todos.filter((todo) => {
            //     // console.log(`todo ${todo.id} payload ${action.payload}`);
            //     return todo.id !== action.payload
            //     }
            // );
            
            
            let newArrayDeleted = [];
            
            arrayDeleted.forEach( (element, index) => {
                newArrayDeleted.push( {todoName: element.todoName, id: index+1, completed: element.completed} )
                // console.log(newArrayDeleted[index])
            })
            return {
                ...state,
                // todos: state.todos.filter( (todo) => todo.id !== action.payload),
                todos: arrayFiltrado,
                todosLosTodos: newArrayDeleted
            }
        case COMPLETE:
            let arrayComplete = [];
            state.todos.forEach( (todo, index) => {
                if(index+1 === action.payload){
                    arrayComplete.push({...todo, completed: !todo.completed})
                } else {
                    arrayComplete.push(todo)
                }
            } )
            // console.log(arrayComplete)

            return { 
                    ...state,
                    todos: arrayComplete,
                    todosLosTodos: arrayComplete
                }
            // return {
            //     ...state,
            //     todos: state.todos.forEach( (todo, index) => {
            //         if(index+1 === action.payload){
            //             arrayComplete.push({...todo, completed: !todo.completed})
            //         } else {
            //             arrayComplete.push(todo)
            //         }
            //         // return arrayComplete
            //     })
            // }
        // case COMPLETE:
        //     let arrayCopy = state.todos.map((item, index) => {
        //                                                         if(index+1 === action.payload){
        //                                                             return {...item, completed: !item.completed}
        //                                                         }
        //                                                         return {...item} } );
        //     return {
        //         ...state,
        //          todos: arrayCopy
        //     }

        case FILTER_ALL_TODOS:
        
        const nombreEnTodosLosTodos = action.payload;
        let expresionRegularAFiltrarTodos = new RegExp(nombreEnTodosLosTodos)
            return {
                ...state,
                // todos: state.todosLosTodos.filter( (todo) => todo.todoName === action.payload )
                todos: state.todosLosTodos.filter( (x) => expresionRegularAFiltrarTodos.exec(x.todoName))
            }
        case FILTER_ACTIVE_TODOS:
            const nombreEnTodosActivos = action.payload;
            let expresionRegularAFiltrarActivos = new RegExp(nombreEnTodosActivos)
            return {
                ...state,
                // todos: state.todosLosTodos.filter( (todo) => todo.todoName === action.payload )
                todos: state.todosLosTodos.filter( (x) => expresionRegularAFiltrarActivos.exec(x.todoName))
            }
        case FILTER_COMPLETED_TODOS:
            const nombreEnTodosCompletos = action.payload;
            let expresionRegularAFiltrarCompletos = new RegExp(nombreEnTodosCompletos)
            return {
                ...state,
                // todos: state.todosLosTodos.filter( (todo) => todo.todoName === action.payload )
                todos: state.todosLosTodos.filter( (x) => expresionRegularAFiltrarCompletos.exec(x.todoName))
            }
        default: 
            return state;
    }
        
}