import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import ResultsTable from "./Components/ResultsTable";

class App extends React.Component {
  state = {
    meteorites: [],
  };

  updateMeteorites = (dropdownValue, searchText) => {
    fetch(
      `https://data.nasa.gov/resource/gh4g-9sfh.json?${dropdownValue}=${searchText}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState(
          () => {
            return { meteorites: res };
          },
          () => {
            console.log(this.state.meteorites);
          }
        );
      });
  };

  componentDidMount() {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=10")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState(() => {
          return { meteorites: res };
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm updateMeteorites={this.updateMeteorites} />
        <ResultsTable meteorites={this.state.meteorites} />
      </div>
    );
  }
}

export default App;
