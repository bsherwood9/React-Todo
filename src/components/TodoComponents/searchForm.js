import React from "react";

const SearchForm = props => {
  return (
    <div>
      <form>
        <label htmlFor="search">Search:</label>
        <input
          name="search"
          type="text"
          value={props.searchTerm}
          placeholder="Search characters..."
          onChange={props.handleSearch}
        ></input>
      </form>
    </div>
  );
};

export default SearchForm;
