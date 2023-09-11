import React, { useState } from "react";
import styles from "./SearchBar.module.css";


const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ searchYelp}) => {
  const [termState, setTermState] = useState('');
  const [location, setLocation] = useState('')
  const [sortBy,setSortBy] = useState('best_match')

  const getSortByClass = (sortByOption) => {
    if(sortBy === sortByOption){
      return styles.active
    }
    return ''
  }

  const handleSorting = (sortByOption) => {
setSortBy(sortByOption)
  }

  const updateTermState = (e) => {
    const value = e.target.value
    setTermState(value)
  }

const updateLocation = (e) => {
  const value = e.target.value
  setLocation(value)
}

const handleSearch = (event) => {
  event.preventDefault();
  searchYelp(termState, location, sortBy)
}

// const updateRating = (e) => {
// const ratingValue = e.target.value
// ratingValue === sortBy ? setSortBy(null) : setSortBy(ratingValue)
// }

// const handleButton = () => {
//   console.log(`Searching for ${termState} options based on ${location} and ${rating}`)
// }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
      <li className={getSortByClass(sortByOptionValue)}
       onClick={()=> {handleSorting(sortByOptionValue)}}
       key={sortByOptionValue}
       
       >{sortByOption}
       </li>
      );
    });
  };

  return (
    <>
      <div className={styles.SearchBar}>
        <div className={styles.SearchBarsortoptions}>
          <ul>{renderSortByOptions()}</ul>
        </div>
        <form onSubmit={handleSearch}>
        <div className={styles.SearchBarfields}>
          <input placeholder="Search Businesses" onChange={updateTermState}/>
          <input placeholder="Where ?" onChange={updateLocation} />
        </div>
        <div className={styles.SearchBarsubmit}>
          <button type="submit">Search</button>
        </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
