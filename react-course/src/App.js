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
  const [ todos, setTodos ] = React.useState(todos);
  const [ searchValue, setSearchValue ] = React.useState('');
  

  // Estructura del todo Counter
  const completed = todos.filter(todo => !!todo.completed).length;
  const totalTodo = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
        searchedTodos = todos;
  } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
  }
  
  const completeTodo = (text) => {
    // Encontrar posición dentro del array para cambiar lo que se deba cambiar
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

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
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
