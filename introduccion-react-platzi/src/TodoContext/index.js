import React from "react";
import { useLocalStorage } from "./useLocalStorage";
// Herramienta principal
// React.createContext


const TodoContext = React.createContext();

function TodoProvider (props) {
      //Estructura del Search value
    const {
        item: todos, 
        saveItem: saveTodos,
        loading: loading,
        error: error,
    } = useLocalStorage('TODOS_V1', []);
    const [ searchValue, setSearchValue ] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    // Estructura del todo Counter 
    const completedTodos = todos.filter(todo => !!todo.completed).length;
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
        <TodoContext.Provider value={{
            loading ,
            error ,
            totalTodo ,
            completedTodos ,
            searchValue ,
            setSearchValue ,
            searchedTodos ,
            completeTodo ,
            deleteTodo ,
            openModal ,
            setOpenModal ,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider};