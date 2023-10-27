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
      <h1 className="App-header">The One</h1>
      <h3 className="App-header-it"><em>When you cant decide what to eat</em></h3>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
