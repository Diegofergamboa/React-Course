import React from "react";
import './TodoSearch.css'

function TodoSearch() {
    // Para crear movimientos del estado de hace con .useState
    // Estos son react hooks

    const estado = React.useState();
    

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };


    return (
        <input 
            className="TodoSearch" 
            placeholder='Search your items ToDo'
            onChange={onSearchValueChange}
            />
    );
};

export { TodoSearch };