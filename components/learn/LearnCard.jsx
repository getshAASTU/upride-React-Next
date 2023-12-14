import React from "react";
import "./learn.module.css";
const LearnCard = () => {
  return (
    <div className="learnCard">
      <img className="imgs" src="/fourteen.jpeg" alt="learnBasics" height={157} width={275} />
      <div className="content">
        <h2>Road Safety </h2>
        <p className="learnText">
          Learn about basics of car driving. Understand the combination of
          clutch, brake & accelerator
        </p>
      </div>
    </div>
  );
};

export default LearnCard;
