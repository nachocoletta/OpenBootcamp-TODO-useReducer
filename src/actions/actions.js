import { GET_ALL_TODOS, COMPLETE, CREATE_TODO, DELETE, GET_COMPLETED_TODOS,
GET_IN_PROGRESS_TODOS} from './todoActionsTypes'

export const getAllTodos = () => {
    return (
        {
            type: GET_ALL_TODOS,
            // payload: todo          
        }
    )
}

export const getCompletedTodos = () => {
    return (
        {
            type: GET_COMPLETED_TODOS,
            // payload: ''
        }
    )
}

export const getInProgressTodos = () => {
    return (
        {
            type: GET_IN_PROGRESS_TODOS,
            // payload: ''
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
