import React from 'react';
import './Business.css';

const Business = (props) => {
  return (
    <div className="Business">
      <h3 style={{marginTop: 0}} >This is the one:</h3>
      <div className="image-container">
        <img src={props.business.imageSrc} alt="" />
      </div>
      <h2>{props.business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{`${props.business.state} ${props.business.zipCode}`}</p>
        </div>
        <div className="Business-reviews">
          <h3 style={{marginTop: 10}} >{props.business.category}</h3>
          <h3 className="rating">{`${props.business.rating} ⭐`}</h3>
          <p>{`${props.business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
