import React from "react";

const SearchForm = props => {
  return (
    <div>
      <form>
        <input
          name="search"
          type="text"
          value={props.searchTerm}
          placeholder="Search todos..."
          onChange={props.handleSearch}
        ></input>
      </form>
    </div>
  );
};

export default SearchForm;
