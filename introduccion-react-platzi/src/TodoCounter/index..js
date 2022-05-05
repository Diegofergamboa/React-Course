import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodo, completedTodos } = React.useContext(TodoContext);

    return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodo} TODO's</h2>
    );
}

export { TodoCounter };
