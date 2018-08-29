import React from "react";
class TableLines extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>Zaeem</td>
          <td>34</td>
          <td>23000</td>
          <td>
            <a href="update.php?id=12" class="btn btn-info" role="button">
              Edit
            </a>
            <a
              href="delete.php?id=12"
              onClick="return confirm('Are you sure you want to delete?')"
              class="btn btn-info"
              role="button"
            >
              Delete
            </a>
          </td>
        </tr>
        <tr>
          <td>Laeeq</td>
          <td>35</td>
          <td>13000</td>
          <td>
            <a href="update.php?id=11" class="btn btn-info" role="button">
              Edit
            </a>
            <a
              href="delete.php?id=11"
              onClick="return confirm('Are you sure you want to delete?')"
              class="btn btn-info"
              role="button"
            >
              Delete
            </a>
          </td>
        </tr>
        <tr>
          <td>Sonya Frost</td>
          <td>23</td>
          <td>103600</td>
          <td>
            <a href="update.php?id=10" class="btn btn-info" role="button">
              Edit
            </a>
            <a
              href="delete.php?id=10"
              onClick="return confirm('Are you sure you want to delete?')"
              class="btn btn-info"
              role="button"
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default TableLines;
