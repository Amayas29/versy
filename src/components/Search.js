import React from "react";
import Action from "./Action";

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <Action name="fa-magnifying-glass" size="fa-lg" />
      <Action name="fa-xmark" size="fa-lg" />
    </div>
  );
};

export default Search;
