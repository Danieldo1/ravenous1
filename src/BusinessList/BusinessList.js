import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

const BusinessList = (props) => {
  return (
    <div className="BusinessList">
        <h3 style={{marginBottom: 5,marginTop: 5}}>This is the one: </h3>
      {props.businesses.map((business) => (
        <Business business={business} key={business.id} />
      ))}
    </div>
  );
};

export default BusinessList;