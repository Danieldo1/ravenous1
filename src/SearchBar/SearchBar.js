import React, { useState } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [termState, setTermState] = useState(null);
  const [location, setLocation] = useState(null)
  const [rating,setRating] = useState(null)


  const updateTermState = (e) => {
    const value = e.target.value
    setTermState(value)
  }

const updateLocation = (e) => {
  const value = e.target.value
  setLocation(value)
}

const updateRating = (e) => {
const ratingValue = e.target.value
ratingValue === rating ? setRating(null) : setRating(ratingValue)
}

const handleButton = () => {
  console.log(`Searching for ${termState} options based on ${location} and ${rating}`)
}

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li onChange={updateRating} key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  console.log(termState)
  console.log(location)
  console.log(rating)

  return (
    <>
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul className="SearchBar-sort-options">{renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={updateTermState}/>
          <input placeholder="Where ?" onChange={updateLocation} />
        </div>
        <div className="SearchBar-submit">
          <button onClick={handleButton}>Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
