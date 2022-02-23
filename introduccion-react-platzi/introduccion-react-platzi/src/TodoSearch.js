import React, { Component } from "react";
import './TodoSearch.css'


function TodoSearch( {searchValue , setSearchValue} ) {
    
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        return setSearchValue(event.target.value); // Aqui estoy cambiando por el value dle input
    };


    return [
        <input 
            className="TodoSearch" 
            placeholder='Search your items ToDo'
            value = {searchValue} // De primero es el string vacio
            onChange={onSearchValueChange} // Para ejecutar el cambio del valor del estado 
            />,
    ]
}

export { TodoSearch };