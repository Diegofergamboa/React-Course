import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false } ,
//   { text: 'Tomar curso', completed: false } ,
//   { text: 'Renderizar', completed: false } ,
//   { text: 'Comer', completed: false } ,
// ];


function App() {

  // Creación de estados
  // Hay que llamarlos dentro de los componentes del App
  // useState se usa para principalmente cambiar los valores.

  // Configuración del localStorage
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    // Valor por defecto porque es la primera vez que loguea el User
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    // Si ya se han creado, se va a parsear la información del usuario dentro de un objeto de HS
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //Estructura del Search value
  const [ todos, setTodos ] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);  
  };
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    let newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodo}
      completeTodos={completed}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
