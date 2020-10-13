import React from "react";

class SearchForm extends React.Component {
  //when submit button is clicked, the form makes a fetch call to nasa api using
  //fetch(nasa meteorite api)
  state = {
    searchCategory: "year",
    searchText: "",
  };

  updateCategory = (event) => {
    const value = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchCategory: value,
      };
    });
  };

  updateText = (event) => {
    const value = event.target.value;
    this.setState(() => {
      return {
        searchText: value,
      };
    });
  };

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let searchArg = this.state.searchText;
          if (this.state.searchCategory === "year") {
            searchArg += "-01-01T00:00:00.000";
          }
          this.props.updateMeteorites(this.state.searchCategory, searchArg);
        }}
      >
        <label htmlFor="dropdown">
         <span>Search By</span> 
          <select
            onChange={this.updateCategory}
            name="dropdown"
            type="dropdown"
          >
            <option value="year">Year</option>
            <option value="Recclass">Recclass</option>
          </select>
        </label>
        <br />
        <label htmlFor="searchtext">
          <span>Search text</span>
          <input
            onChange={this.updateText}
            id="searchtext"
            name="searchtext"
            type="text"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchForm;
