import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false } ,
  { text: 'Tomar curso', completed: false } ,
  { text: 'Renderizar', completed: false } ,
  { text: 'Comer', completed: false } ,
];


function App() {

  // Creación de estados
  // Hay que llamarlos dentro de los componentes del App
  // useState se usa para principalmente cambiar los valores.

  //Estructura del Search value
  const [ todos, setTodos ] = React.useState(defaultTodos);
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
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);  
  };
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    let newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodo}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
