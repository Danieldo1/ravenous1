import React from "react";
import './BusinessList.css'
import Business from "../Business/Business";




const BusinessList = ({business}) => {

if(!business){
    return <h1>Loading...</h1>
}
return (
    <div className="BusinessList">
      {business.map((business)=> {
            <Business  key={business} business={business} />
        })}
    </div>
)
}

export default BusinessList