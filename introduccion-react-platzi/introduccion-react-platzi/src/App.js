import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


const defaultTodos = [
  {text: 'Cook the dinner', completed: true},
  {text: 'Course of React', completed: false},
  {text: 'Clean the filter', completed: false},
];

// ! Hay que tener cuidado con el estado para no realizar demasiados re renders.

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !! todo.completed).length; // Doble signo de asignación dice si es verdadero
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }  else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue = {searchValue} 
        setSearchValue = {setSearchValue}
      />
      <TodoList >
        {searchedTodos.map(todo => 
            (
            <TodoItem
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed} 
            />
            ))};
      </TodoList >
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
