import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const onComplete = () => {
        alert('Task completed ' + props.text)
    };
    const onDelete = () => {
        alert('Task erased ' + props.text)
    };



    return (
    <li className="TodoItem">
    <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
    onClick={onComplete}
    >
        √
    </span>
    <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
    onClick={onDelete}
    >
        {props.text}
    </p>
    <span className="Icon Icon-delete">
        X
    </span>
    </li>
);
}

export { TodoItem };