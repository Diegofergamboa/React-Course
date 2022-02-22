import React, { Component } from "react";
import './TodoSearch.css'


// class Componente extends React.Component {
//     // Se realizan construcciones de los componentes
//     constructor() {
//         this.state = {
//             variable: 'variable'
//         };
//     }

//     // Aqui llamamos la renderización.
//     render() {
//         return (
//             <div> {this.state.variable}</div>
//         );
//     };
// };

function TodoSearch( searchValue , setSearchValue ) {
    
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value); // Aqui estoy cambiando por el value dle input
    };


    return [
        <input 
            className="TodoSearch" 
            placeholder='Search your items ToDo'
            value = {searchValue} // De primero es el string vacio
            onChange={onSearchValueChange} // Para ejecutar el cambio del valor del estado 
            />,
    ];
}

export { TodoSearch };