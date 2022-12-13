import { COMPLETE, GET_ALL_TODOS, CREATE_TODO, DELETE,
GET_COMPLETED_TODOS, GET_IN_PROGRESS_TODOS } from '../actions/todoActionsTypes'



export const todoReducer = (state, action) => {
    switch(action.type){
        case GET_ALL_TODOS:
            let arrayAllTodos = [];

            // console.log(state.todos)
            state.todos.forEach( (todo, index) => {
                arrayAllTodos.push(todo)
            })
            // console.log(arrayAllTodos)
            return {
                ...state,
                todos: arrayAllTodos
            }
        case GET_COMPLETED_TODOS:
            // console.log(action.payload)
            let arrayCompleted = [];

            state.todos.forEach( (todo) => {
                if(todo.completed === true)
                    arrayCompleted.push(todo);
            })
            // console.log(arrayCompleted)
            // console.log(state.todos)

            return {
                ...state,
                todos: arrayCompleted
            }

        case GET_IN_PROGRESS_TODOS:
            return {
                ...state,
                todos: state.todos.filter ( (todo) => todo.completed === false)
            }

        case CREATE_TODO:
            return (
                {
                    ...state,
                    todos: [...state.todos, action.payload]
                }
            )
        case DELETE:

            let arrayDeleted = state.todos.filter((todo) => {
                // console.log(`todo ${todo.id} payload ${action.payload}`);
                return todo.id !== action.payload
                }
            );
            
          
            let newArrayDeleted = [];
            
            arrayDeleted.forEach( (element, index) => {
                newArrayDeleted.push( {todoName: element.todoName, id: index+1, completed: element.completed} )
                // console.log(newArrayDeleted[index])
            })
            return {
                ...state,
                // todos: state.todos.filter( (todo) => todo.id !== action.payload)
                todos: newArrayDeleted
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
                    todos: arrayComplete  
                }
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
        default: 
            return state;
    }
        
}