import React from "react";
import { TodoList } from "./TodoList";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };