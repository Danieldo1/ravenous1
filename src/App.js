import React, { useState, useEffect } from 'react';
import './App.css';

import BusinessList from './BusinessList/BusinessList';
import SearchBar from './SearchBar/SearchBar';

import Yelp from './utils/Yelp';

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((businesses) => {
      setBusinesses(businesses);
    });
  };

  useEffect(() => {
    // You can add any initial logic here, if needed.
  }, []);

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
