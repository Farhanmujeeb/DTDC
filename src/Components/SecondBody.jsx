import React from "react";
import Phone from "./imgs/icon-pickup.png";
import Search from "./imgs/icon-search-sch.png";
import Locator from "./imgs/icon-tracking.png";
const SecondBody = () => {
  return (

    
    <div className="total">
      <div className="card">
        <div className="bothtextandimg">
            
          <img src={Phone} alt="" />
          <div className="newsub">
            <h3>Book your shipment</h3>
            <p>Request a pickup we'll be at your doorstep shortly</p>
          </div>
        </div>
        <button>Book now</button>
      </div>

      <div className="card">
        <div className="bothtextandimg">
          <img src={Search} alt="" />
          <div className="newsub">
            <h3>Track your shipment</h3>
            <p>Click to know where your parcel has reached</p>
          </div>
        </div>
        <button>Track a shipment</button>
      </div>

      <div className="card">
        <div className="bothtextandimg">
          <img src={Locator} alt="" />
          <div className="newsub">
            <h3>Store locator</h3>
            <p>Find a DTDC outlet near you</p>
          </div>
        </div>
        <button>Start Search</button>
      </div>
    </div>
  );
};

export default SecondBody;
