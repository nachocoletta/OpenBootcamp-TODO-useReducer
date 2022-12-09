import { GET_ALL_TODOS, COMPLETE, ON_CHANGE, CREATE_TODO, DELETE} from './todoActionsTypes'

export const getAllTodos = () => {
    return (
        {
            type: GET_ALL_TODOS,
            payload: ''          
        }
    )
}

export const createTodo = (todo) => {
    return ( {
            type: CREATE_TODO,
            payload: todo
    })
}

export const completeTodo = (id) => {
    return ({
            type: COMPLETE,
            payload: id
    })
}

export const deleteOneTodo = (id) => {
    return ({
            type: DELETE,
            payload: id
    })
}
