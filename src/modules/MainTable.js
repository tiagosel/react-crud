import React from "react";
import TableLines from "./TableLines";
let lines = [
  { name: "Zaeem", age: 34, Salary: 23000 },
  { name: "Zaeem", age: 34, Salary: 23000 },
  { name: "Zaeem", age: 34, Salary: 23000 }
];
class MainTable extends React.Component {
  render() {
    return (
      <table class="table table-responsive">
        <thead>
          <tr>
            {this.props.cabecalho.map((object, i) => (
              <th>{object}</th>
            ))}
            <th />
          </tr>
        </thead>
        <TableLines />
      </table>
    );
  }
}

export default MainTable;
