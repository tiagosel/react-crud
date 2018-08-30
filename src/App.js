import React, { Component } from "react";
import "./App.css";
import MainTable from "./modules/MainTable";

let cabecalho = ["Name", "Age", "Salary"];

class App extends Component {
  //Lista de cabeçalho

  render() {
    return (
      <div class="container">
        <br />
        <div class="container">
          <h2>CRUD React</h2>
          <br />
          <div class="row">
            <div class="col-sm-4 pull-right">
              <a href="create.php" class="btn btn-info" role="button">
                Add Employee
              </a>
            </div>
          </div>
          <MainTable cabecalho={cabecalho} />
        </div>
      </div>
    );
  }
}

export default App;
