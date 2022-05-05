import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter/index.';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal';


function AppUI() {
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal ,
        setOpenModal ,
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>

        <TodoCounter/>

        <TodoSearch/>

        <TodoList>
        {/* Ejemplo mientras que esté cargando un proceso como un llamamiento a API, como funcionará */}
        {error && <p>Hubo un error en la carga</p>}
        {loading && <p>Estamos cargando, no desesperes</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo!</p>}

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

        {openModal && (
            <Modal>
                <p>{searchedTodos[0]}</p>
            </Modal>
        )}

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />

    </React.Fragment>
    );
};

export { AppUI }
