import React from "react";
import "./App.css";
import Display from "./display";

export default class App extends React.Component {
  render() {
    const type1 = "fire";
    const type2 = "electric";
    return (
      <div className="App">
        <header className="App-header">
             <Display type1={type1} type2={type2} />  
        </header>
      </div>
    );
  }
}

