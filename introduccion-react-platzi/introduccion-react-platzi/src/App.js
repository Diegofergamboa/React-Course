import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


const todos = [
  {text: 'Cook the dinner', completed: true},
  {text: 'Course of React', completed: false},
  {text: 'Clean the filter', completed: false},
];


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {todos.map(todo => 
            (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
      </TodoList >
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
