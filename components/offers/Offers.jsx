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
        <button className="svg2Container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="40"
            viewBox="0 0 102 35"
            fill="none"
          >
            <path
              d="M1.5 17.5C1.5 8.11116 9.11116 0.5 18.5 0.5H83.5C92.8888 0.5 100.5 8.11116 100.5 17.5C100.5 26.8888 92.8888 34.5 83.5 34.5H18.5C9.11116 34.5 1.5 26.8888 1.5 17.5Z"
              stroke="black"
              stroke-opacity="0.2"
            />
          </svg>
          <h5 className="view">View All</h5>
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
