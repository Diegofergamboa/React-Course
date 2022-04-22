import React from "react";
import { TodoCounter } from '../TodoCounter/index.';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';


function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
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
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>

        <CreateTodoButton />

    </React.Fragment>
    );
};

export { AppUI }
