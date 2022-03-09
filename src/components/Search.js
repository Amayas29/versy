import React from "react";
import Icon from "./Icon";

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <Icon name="fa-magnifying-glass" size="fa-lg" />
      <Icon name="fa-xmark" size="fa-lg" />
    </div>
  );
};

export default Search;
