import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainTable from "./modules/MainTable";

let cabecalho = ["Name", "Age", "Salary"];

class App extends Component {
  //Lista de cabeçalho

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MainTable cabecalho={cabecalho} />
      </div>
    );
  }
}

export default App;
