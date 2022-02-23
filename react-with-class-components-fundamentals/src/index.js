import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    // Definir las propiedades.
    <App/>,
  document.getElementById('root')
);

// Definición de propiedades que se le pueden dar a los modulos.

App.PropTypes = {
  txt: React.PropTypes.string, 
  n: React.PropTypes.number.isRequired,
}

App.defaultProps = {
  txt: "This is the default text",
}





