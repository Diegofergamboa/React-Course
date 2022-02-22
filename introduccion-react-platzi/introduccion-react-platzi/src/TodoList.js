import React from "react";
import TodoItem from './TodoItem';
import './TodoList.css';


function TodoList(props) {
    return (
        <section className="TodoList" >
            <ul>
                {props.children}
            </ul>
        </section>
        );
};

export { TodoList };