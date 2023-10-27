import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

const BusinessList = (props) => {
  return (
    <>
    
        {/* <h3>This is the one: </h3> */}
    <div className="BusinessList">
      {props.businesses.map((business) => (
        <Business business={business} key={business.id} />
      ))}
    </div>
    </>
  );
};

export default BusinessList;