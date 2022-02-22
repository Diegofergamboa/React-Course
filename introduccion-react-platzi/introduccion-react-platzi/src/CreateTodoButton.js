import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(`Modal opened with this message: ${msg}`)
    };
    
    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('MESSAGE')}
            >
            +
        </button>
    );
}

export { CreateTodoButton };