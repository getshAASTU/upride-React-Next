import React from "react";
import "./learnPro.css";
import { learnBasics } from "@/constants/datas";
import LearnCard from "../LearnCard";
const LearnPro = () => {
  return (
    <div className="lpContainer">
      <h1>Personalized Learning Programs</h1>
      <div className="learn_imgContainer">
        <div className="learn_img"></div>
        <div className="text">
          <h3>Easy, reliable, and flexible.</h3>
          <p>
            At Upride, we know that every learner is unique, and so are their
            needs when it comes to driving education. Our commitment to
            personalized learning goes beyond the conventional, offering
            tailor-made programs designed to cater to individual preferences .
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="slideCardsContainer">
        <div className="slideTitle">
          <p>All</p>
          <p>Training</p>
          <p>RTO & Rules</p>
        </div>
        <div className="slideCards">
          {learnBasics.map((item, index) => (
            <LearnCard key={item.index} {...item} />
          ))}
        </div>
      </div>

      <div className="licenseTest">
        <h2>Prepare for Learner’s License Test</h2>
        <p className="licenseText">
          Curated videos for you to easily pass learner’s license test. Watch
          now and pass the test with utmost ease.{" "}
        </p>
        <button className="licenseBtn">Watch Now</button>
      </div>
    </div>
  );
};

export default LearnPro;
