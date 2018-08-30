import React from "react";
class TableLines extends React.Component {
  state = {
    lines: null
  };
  componentWillMount = () => {
    this.setState({ lines: this.props.lines });
  };

  addElement = () => {
    let newElement = { name: "Tiago", age: 38, slary: 8000 };
    let lines = this.state.lines;
    lines[lines.length] = newElement;
    this.setState({ lines: lines });
  };

  removeElement(i) {
    this.state.lines.splice(i, 1);
    let lines = this.state.lines;
    this.setState({ lines: lines });
  }

  render() {
    return (
      <tbody>
        {this.state.lines.map((object, i) => (
          <tr>
            <td>{object.name}</td>
            <td>{object.age}</td>
            <td>{object.slary}</td>
            <td>
              <button Class="btn btn-info" onClick={this.addElement.bind(this)}>
                Edit {i}
              </button>
              <span> </span>
              <button
                abc={i}
                class="btn btn-info"
                onClick={this.removeElement.bind(this, i)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableLines;
