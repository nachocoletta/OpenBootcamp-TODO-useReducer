// import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react'
import { todoReducer } from './reducers/todoReducer'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFormFooter from './components/TodoFormFooter';

export const initialState = {
  todos: []
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
          <h1>App Create TODO..</h1>
          <TodoForm></TodoForm>
          <TodoList></TodoList>
          <TodoFormFooter></TodoFormFooter>
        </header>
      </div>
    </ProviderTodo>
  );
}

export default App;
