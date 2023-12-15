import React from "react";
import './testimonies.css'
import Tcard from "../testimonyCard/Tcard";
const Testimonies = () => {
  return (
    <div className="testimonies">
      <h2 className="testimonyTitle">what our clients say</h2>
      <p className="testimonyText">Quality training and easy to get driving license</p>
      <div className="testimonyContainer">
         <Tcard/>
         <Tcard/>
         <Tcard/>
      </div>
    </div>
  );
};

export default Testimonies;
