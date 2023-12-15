import React from "react";
import "./learn.css";
const LearnCard = ({ title, content, img }) => {
  return (
    <div className="learnCard">
      <img
        className="imgs"
        src={img}
        alt="learnBasics"
        height={157}
        width={275}
      />
      <div className="content">
        <h2>{title}</h2>
        <p className="learnText">{content}</p>
      </div>
    </div>
  );
};

export default LearnCard;
