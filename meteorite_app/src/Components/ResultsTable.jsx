import React from "react";

class ResultsTable extends React.Component {
  makeRows = (meteorites) => {
    return meteorites.map((element, index) => {
      return (
        <tr id={index}>
          <td>{element.name}</td>
          <td>{element.id}</td>
          <td>{element.recclass}</td>
          <td>{element.year}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Recclass</th>
            <th>Year</th>
          </tr>
          {this.makeRows(this.props.meteorites)}
        </tbody>
      </table>
    );
  }
}

export default ResultsTable;
