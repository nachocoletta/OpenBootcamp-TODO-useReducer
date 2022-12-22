// import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react'
import { todoReducer } from './reducers/todoReducer'
import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import TodoFormFooter from './components/TodoFormFooter';

export const initialState = {
  todos: [],
  todosLosTodos: []
  // todos: [{
  //     id: 1,
  //     todoName: 'tarea inicial',
  //     completed: false
  //     },
  //     {
  //     id: 2,
  //     todoName: 'tarea 2',
  //     completed: false
  //     } ]
}



export const myContext = React.createContext(initialState);

export const ProviderTodo = myContext.Provider;
export const ConsumerTodo = myContext.Consumer;

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <ProviderTodo value={[state, dispatch]}>
      <div className="App">
        <header className="App-header">
          <div className="AppStyle">
            <h1>YOUR TODOS</h1>
            <TodoForm></TodoForm>
            {/* <TodoList></TodoList> */}
            {/* <TodoFormFooter></TodoFormFooter> */}
          </div>
        </header>
      </div>
    </ProviderTodo>
  );
}

export default App;
