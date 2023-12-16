import React from "react";
import "./learnPro.css";
import { learnBasics } from "@/constants/datas";
import LearnCard from "../LearnCard";
const LearnPro = () => {
  return (
    <div className="lpContainer">
      <h1>Personalized Learning Programs</h1>
      <div className="learn_imgContainer">
        <div className="yellowBackground">
          <div className="whiteBackground"></div>
          <div className="learn_img">
            <svg
              className="learn_circle"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 139 139"
              fill="none"
            >
              <circle cx="69.5" cy="69.5" r="69" stroke="#FD5444" />
            </svg>
            <div id="svgColor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 70 70"
                fill="none"
              >
                <g clipPath="url(#clip0_0_267)">
                  <path
                    d="M67.4899 9.65719C66.4686 8.63411 64.8115 8.63234 63.7901 9.65285L32.4001 40.96L21.0747 28.6595C20.0961 27.5972 18.4415 27.5283 17.3775 28.5068C16.3142 29.4854 16.2462 31.1408 17.2248 32.204L30.3949 46.5071C30.8772 47.0313 31.5522 47.3357 32.264 47.3505C32.2831 47.3513 32.3015 47.3513 32.3198 47.3513C33.0115 47.3513 33.6769 47.0766 34.1671 46.5882L67.4848 13.3578C68.5087 12.3374 68.5104 10.6803 67.4899 9.65719Z"
                    fill="#10A5F5"
                  />
                  <path
                    d="M66.8584 32.2625C65.4132 32.2625 64.2419 33.4338 64.2419 34.8791C64.2419 51.1351 51.0179 64.3591 34.762 64.3591C18.507 64.3591 5.28197 51.1351 5.28197 34.8791C5.28197 18.6242 18.507 5.39915 34.762 5.39915C36.2072 5.39915 37.3786 4.22786 37.3786 2.78265C37.3786 1.33731 36.2072 0.166016 34.762 0.166016C15.6209 0.166016 0.0488281 15.7381 0.0488281 34.8791C0.0488281 54.0194 15.6209 69.5923 34.762 69.5923C53.9022 69.5923 69.4751 54.0194 69.4751 34.8791C69.4751 33.4339 68.3038 32.2625 66.8584 32.2625Z"
                    fill="#10A5F5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_267">
                    <rect
                      width="69.4262"
                      height="69.4262"
                      fill="#10A5F5"
                      transform="translate(0.0488281 0.166016)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

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
          <p className="filter filterAll">All</p>
          <p className="filter">Training</p>
          <p className="filter">RTO & Rules</p>
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
