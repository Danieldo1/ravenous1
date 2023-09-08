import React from "react";
import "./SearchBar.css";



const SearchBar = () => {

 
  return (
    <>
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul className="Sort-Options"></ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where ?" />
        </div>
        <div className="SearchBar-submit">
            <a>Lets go</a>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
