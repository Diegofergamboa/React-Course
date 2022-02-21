import React from "react";
import TodoItem from './TodoItem';
// Items to Do.


function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
        );
};

export { TodoList };