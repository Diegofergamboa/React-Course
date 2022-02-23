import React from 'react';
import ReactDOM from 'react-dom';


class firstComponent extends React.Component {
    render() {
        // !Existen 3 maneras diferentes de realizar la renderización en React de componentes.
        // * 1. Manera de componente clásico.
        return ( <h1>Hello world on first component</h1>)
        // * 2. Manera de DOM representation.
        // React.createElement('h1', null, 'hello world on first component')
        // //* 3. Manera de export clásico.
        // const AppForFirstComponent = () => {
        //     <h1>Hello world on first component</h1>
        }
};



export { firstComponent }
