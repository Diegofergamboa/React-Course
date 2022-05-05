import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false } ,
//   { text: 'Tomar curso', completed: false } ,
//   { text: 'Renderizar', completed: false } ,
//   { text: 'Comer', completed: false } ,
// ];

function useLocalStorage(itemName, initialValue) {
  const [ loading, setLoading ] = React.useState(true);
  const [ error, setError ] = React.useState(false);
  const [ item, setItem ] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
        try {          
          // Configuración del localStorage
          const LocalStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!LocalStorageItem) {
            // Valor por defecto porque es la primera vez que loguea el User
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            // Si ya se han creado, se va a parsear la información del usuario dentro de un objeto de HS
            parsedItem = JSON.parse(LocalStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
    }, 1000)
  });



  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  //Estructura del Search value
  const {
    item: todos, 
    saveItem: saveTodos,
    loading: loading,
    error: error,
  } = useLocalStorage('TODOS_V1', []);
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
      loading={loading}
      error={error}
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
