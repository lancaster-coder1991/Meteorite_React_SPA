import React from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import Header from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import ResultsTable from "./Components/ResultsTable";

const position = [51.505, -0.09];

class App extends React.Component {
  state = {
    meteorites: [],
  };

  updateMeteorites = (dropdownValue, searchText) => {
    fetch(
      `https://data.nasa.gov/resource/gh4g-9sfh.json?${dropdownValue}=${searchText}&$limit=20`
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

  makeMarkers = () => {
    return this.state.meteorites.map((meteorite) => {
      const year =
        meteorite.year === undefined ? "n/a" : meteorite.year.slice(0, 4);
      return (
        <Marker
          key={meteorite.id}
          position={[meteorite.reclat, meteorite.reclong]}
        >
          <Popup>
            {`Name: ${meteorite.name}`}
            <br />
            {`Year: ${year}`}
          </Popup>
        </Marker>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm updateMeteorites={this.updateMeteorites} />
        <ResultsTable meteorites={this.state.meteorites} />
        <Map center={position} zoom={1}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {this.makeMarkers()}
        </Map>
      </div>
    );
  }
}

export default App;
