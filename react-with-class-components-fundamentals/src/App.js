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

  setProp( e ) {
    this.setState({ txt: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Put here your new state to the text"  onChange={this.setProp.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}


export default App;
