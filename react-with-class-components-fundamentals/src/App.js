import React from "react";
import { ReactDOM } from "react";
// import { firstComponent } from "./firstComponent";

// Aqui vamos a cambiar el valor del estado.
class App extends React.Component{
  constructor () {
    super();
    this.state = {
      txt: 'This a txt value' , 
      cat: 0 , 
    }
  }

  update( e ) {
    this.setState({ txt: e.target.value })
  }

  render() {
    return (
      <div>
        {/* Setting de componentes */}
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}


// Creando un componente
const Widget = (props) => 
  <input type="text" placeholder="Put here your new state value" onChange={props.update}/>


export default App;
