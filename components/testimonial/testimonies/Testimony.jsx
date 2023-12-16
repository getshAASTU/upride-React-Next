import React from "react";
import "./testimonies.css";
import Tcard from "../testimonyCard/Tcard";
const Testimonies = () => {
  return (
    <div className="testimonies">
      <h2 className="testimonyTitle">what our clients say</h2>
      <p className="testimonyText">
        Quality training and easy to get driving license
      </p>
      <div className="testimonyContainer">
        <Tcard />
        <Tcard />
        <Tcard />
      </div>
      <div className="testimony_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="22"
          viewBox="0 0 66 22"
          fill="none"
        >
          <circle cx="11" cy="11" r="11" fill="#F4777C" />
          <circle cx="55" cy="11" r="11" fill="#EAE3E3" />
        </svg>
      </div>
    </div>
  );
};

export default Testimonies;
