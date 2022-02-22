import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button 
            className="CreateTodoButton"
            onClick={() => console.log('Click on create button')}
            >
            +
        </button>
    );
}

export { CreateTodoButton };