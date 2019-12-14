import React, { Component } from "react";
import "./App.css";
import Smurf from "../components/Smurf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
       <Smurf />
      </div>
    );
  }
}

export default App;