import React from "react";
import "./offers.css";
const Offers = () => {
  return (
    <div className="offerContainer">
      <h5>
        Our Offers
        <div className="underline" />
      </h5>
      <h2>Best offers this month</h2>
      <div className="viewAll">
        <h6>Detailed Description of these offers here.</h6>
        <button className="svg_Container">
          View All 
        </button>
      </div>
      <div className="offers">
        <div className="offerView">
          <div className="offer-one">
            <h3>Get 500 Discount</h3>
            <p>on minimum shopping of Rs. 999.</p>
            <button>Redeem Now</button>
          </div>
          <div className="empity"></div>
        </div>
        <div className="offerView">
          <div className="offer-one">
            <h3>Get 500 Discount</h3>
            <p>on minimum shopping of Rs. 999.</p>
            <button>Redeem Now</button>
          </div>
          <div className="empity"></div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
