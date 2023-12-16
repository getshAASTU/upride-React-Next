import React from "react";
import "./driving.css";
import { drivingSchools } from "@/constants/datas";
import { Card } from "../..";
const DrivingSchools = () => {
  return (
    <div className="recomend_container">
      <h2>Recommended Driving Schools</h2>
      <div className="titleContainer">
        <h4>
          These are upride Verified most recommended Driving Schools in
          Bengaluru
        </h4>
        <div className="btnsContainer">
          <button className="svgContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="40"
              viewBox="0 0 126 35"
              fill="none"
            >
              <rect width="125.323" height="35" rx="17.5" fill="#FF5757" />
              <path
                d="M40.2678 16.7672H37.5796C37.2246 12.3209 33.6693 8.76324 29.2256 8.40825V5.73268C29.2256 5.32808 28.8977 5 28.4933 5C28.089 5 27.7611 5.32808 27.7611 5.73268V8.40825C23.3174 8.76324 19.7621 12.3209 19.4071 16.7672H16.7322C16.3279 16.7672 16 17.0953 16 17.5001C16 17.9047 16.3279 18.2328 16.7322 18.2328H19.4071C19.7621 22.6791 23.3174 26.2368 27.7611 26.5919V29.2673C27.7611 29.6719 28.089 30 28.4933 30C28.8979 30 29.2256 29.6719 29.2256 29.2673V26.5919C33.6693 26.2368 37.2248 22.6791 37.5796 18.2328H40.2678C40.6721 18.2328 41 17.9047 41 17.5001C41 17.0953 40.6721 16.7672 40.2678 16.7672ZM28.4933 25.156C24.2745 25.156 20.8422 21.7214 20.8422 17.5001C20.8422 13.2786 24.2745 9.84404 28.4933 9.84404C32.7122 9.84404 36.1445 13.2786 36.1445 17.5001C36.1445 21.7214 32.7122 25.156 28.4933 25.156Z"
                fill="white"
              />
            </svg>
            <h5>Near Me</h5>
          </button>
          <button className="svg2Container viewBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="40"
              viewBox="0 0 102 35"
              fill="none"
            >
              <path
                d="M1.5 17.5C1.5 8.11116 9.11116 0.5 18.5 0.5H83.5C92.8888 0.5 100.5 8.11116 100.5 17.5C100.5 26.8888 92.8888 34.5 83.5 34.5H18.5C9.11116 34.5 1.5 26.8888 1.5 17.5Z"
                stroke="black"
                strokeOpacity="0.2"
              />
            </svg>
            <h5 className="">View All</h5>
          </button>
        </div>
      </div>
      <div className="cardContainer">
        {drivingSchools.map((item, index) => (
          <Card key={item.index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DrivingSchools;
