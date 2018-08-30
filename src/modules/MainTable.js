import React from "react";
import TableLines from "./TableLines";
let lines = [
  { name: "Zaeem", age: 34, slary: 23000 },
  { name: "Laeeq", age: 35, slary: 13000 },
  { name: "Sonya Frost", age: 23, slary: 103600 }
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
        <TableLines lines={lines} />
      </table>
    );
  }
}

export default MainTable;
