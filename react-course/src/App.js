import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false } ,
  { text: 'Tomar curso', completed: true } ,
  { text: 'Renderizar', completed: false } ,
  { text: 'Comer', completed: true } ,
];


function App() {

  // Creación de estados
  // Hay que llamarlos dentro de los componentes del App
  // useState se usa para principalmente cambiar los valores.

  //Estructura del Search value
  const [ todos, setTodos ] = React.useState(defaultTodos);
  const [ searchValue, setSearchValue ] = React.useState('');
  const todoSearched = 

  // Estructura del todo Counter
  const completed = defaultTodos.filter(todo => !!todo.completed).length;
  const totalTodo = defaultTodos.length;

  

  return (
    <React.Fragment>

      <TodoCounter
        total={totalTodo}
        completed={completed}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
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
