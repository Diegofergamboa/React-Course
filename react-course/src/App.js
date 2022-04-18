import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false } ,
  { text: 'Tomar curso', completed: false } ,
  { text: 'Renderizar', completed: false } ,
];


function App() {
  return (
    <React.Fragment>

      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
