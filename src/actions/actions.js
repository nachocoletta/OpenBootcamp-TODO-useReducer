import { GET_ALL_TODOS, COMPLETE, CREATE_TODO, DELETE, GET_COMPLETED_TODOS,
GET_IN_PROGRESS_TODOS, FILTER_ALL_TODOS, FILTER_ACTIVE_TODOS, FILTER_COMPLETED_TODOS} from './todoActionsTypes'

export const getAllTodos = () => {
    // console.log(todos)
    return (
        {
            type: GET_ALL_TODOS,
            // payload: todos          
        }
    )
}

export const getCompletedTodos = () => {
    return (
        {
            type: GET_COMPLETED_TODOS,
            // payload: todos
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

export const filterAllTodos = (todoName) => {
    return ({
        type: FILTER_ALL_TODOS,
        payload: todoName
    })
}

export const filterActiveTodos = (todoName) => {
    return ({
        type: FILTER_ACTIVE_TODOS,
        payload: todoName
    })
}

export const filterCompletedTodos = (todoName) => {
    return ({
        type: FILTER_COMPLETED_TODOS,
        payload: todoName
    })
}
