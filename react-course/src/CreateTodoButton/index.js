import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onclickButton = () => {
        console.log('OnClickButton');
    };
    return (

        <button 
            className="CreateTodoButton"
            onClick={() => onclickButton()}
        >
            +
        </button>

    );
}

export { CreateTodoButton };
