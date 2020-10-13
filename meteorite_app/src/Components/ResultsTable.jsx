import React from "react";

class ResultsTable extends React.Component {
  makeRows = (meteorites) => {
    return meteorites.map((element, index) => {
        const year = element.year === undefined ? "n/a" : element.year.slice(0,4)
      return (
        <tr key={index} id={index}>
          <td className="left-column">{element.name}</td>
          <td>{element.id}</td>
          <td>{element.recclass}</td>
          <td className="right-column">{year}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th className="left-column">Name</th>
            <th>Id</th>
            <th>Recclass</th>
            <th className="right-column">Year</th>
          </tr>
          {this.makeRows(this.props.meteorites)}
        </tbody>
      </table>
    );
  }
}

export default ResultsTable;
