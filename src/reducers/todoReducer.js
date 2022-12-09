import {COMPLETE, GET_ALL_TODOS, ON_CHANGE, CREATE_TODO, DELETE } from '../actions/todoActionsTypes'

export const todoReducer = (state, action) => {
    switch(action.type){
        case CREATE_TODO:
            return (
                {
                    ...state,
                    todos: [...state.todos, action.payload]
                }
            )
        case DELETE:

            
            let arrayDeleted = state.todos.filter((todo) => {
                console.log(`todo ${todo.id} payload ${action.payload}`);
                return todo.id !== action.payload});
            
            // console.log(arrayDeleted)
            // aca tengo que acomodar los ids
            let newArrayDeleted = [];
            

           

            arrayDeleted.forEach( (element, index) => {
                newArrayDeleted.push( {todoName: element.todoName, id: index+1, completed: element.completed} )
                console.log(newArrayDeleted[index])
            })

            // arrayDeleted = [state.todos]
            // newArrayDeleted = arrayDeleted.map( (e, index) => {
            //     // console.log(e)
            //     e.id = index
            //     return e;
            // } )
            // arrayDeleted.forEach( (element, index) => {
                // console.log('element', element.id)
                // if(element.id >= action.payload){
                //     console.log('element mayores', element.id);
                //     element.id = index+1;
                // }
            //     console.log(element)
            //     element.id = index;
            //     newArrayDeleted[index] = element;
            //     // console.log(index)
            //     // newArrayDeleted = element;
            //     // element.id = index;
            //     // element.id = action.payload-1;
            // })
            // console.log('newArraydeleted', newArrayDeleted)
            return {
                ...state,
                todos: newArrayDeleted
            }
        case COMPLETE:
            let arrayCopy = state.todos.map((item, index) => {
                                                                if(index+1 === action.payload){
                                                                    // console.log(index + " " + action.payload)
                                                                    return {...item, completed: !item.completed}
                                                                }
                                                                return {...item} } );
            return {
                ...state,
                 todos: arrayCopy
            }
        default: 
            return state;
    }
        
}