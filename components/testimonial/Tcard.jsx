import React from "react";
import "./tcard.css";
import Image from "next/image";
const Tcard = () => {
  return (
    <div className="tCard">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="23"
        viewBox="0 0 30 23"
        fill="none"
      >
        <path
          d="M28.814 0V1.68713C26.3953 2.55938 24.5 3.93663 23.1279 5.81886C21.7558 7.67814 21.0698 9.61776 21.0698 11.6377C21.0698 12.0739 21.1395 12.3952 21.2791 12.6018C21.3721 12.7395 21.4767 12.8084 21.593 12.8084C21.7093 12.8084 21.8837 12.728 22.1163 12.5674C22.8605 12.0394 23.8023 11.7754 24.9419 11.7754C26.2674 11.7754 27.4419 12.3149 28.4651 13.3937C29.4884 14.4496 30 15.7121 30 17.1811C30 18.7191 29.407 20.0734 28.2209 21.244C27.0581 22.4147 25.6395 23 23.9651 23C22.0116 23 20.3256 22.2081 18.907 20.6243C17.4884 19.0404 16.7791 16.9172 16.7791 14.2545C16.7791 11.1557 17.7442 8.37824 19.6744 5.92216C21.6047 3.46607 24.6512 1.49202 28.814 0ZM12.0349 0V1.68713C9.61628 2.55938 7.72093 3.93663 6.34884 5.81886C4.97674 7.67814 4.2907 9.61776 4.2907 11.6377C4.2907 12.0739 4.36047 12.3952 4.5 12.6018C4.59302 12.7395 4.69767 12.8084 4.81395 12.8084C4.93023 12.8084 5.10465 12.728 5.33721 12.5674C6.0814 12.0394 7.02326 11.7754 8.16279 11.7754C9.48837 11.7754 10.6628 12.3149 11.686 13.3937C12.7093 14.4496 13.2209 15.7121 13.2209 17.1811C13.2209 18.7191 12.6279 20.0734 11.4419 21.244C10.2791 22.4147 8.86047 23 7.18605 23C5.23256 23 3.54651 22.2081 2.12791 20.6243C0.709302 19.0404 0 16.9172 0 14.2545C0 11.1557 0.965116 8.37824 2.89535 5.92216C4.82558 3.46607 7.87209 1.49202 12.0349 0Z"
          fill="url(#paint0_linear_0_117)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_117"
            x1="5.10647"
            y1="27.7346"
            x2="40.7888"
            y2="-10.8449"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF006E" />
            <stop offset="1" stop-color="#FFBE0B" />
          </linearGradient>
        </defs>
      </svg>
      <p>
        At in pellentesque integer netus enim purus. Tempor nulla porta pretium
        venenatis sem tellus duis. Rhoncus eu le
      </p>
      <div className="imgRating">
        <Image className="img" src="/eighteen.png" alt="profile" width={50} height={50} />
        <div>
          <h4>narendra gates</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="14"
            viewBox="0 0 72 14"
            fill="none"
          >
            <path
              d="M6.44211 0.557861L7.88845 5.00925H12.5689L8.78234 7.76035L10.2287 12.2117L6.44211 9.46063L2.65553 12.2117L4.10187 7.76035L0.315299 5.00925H4.99576L6.44211 0.557861Z"
              fill="#FFE600"
            />
            <path
              d="M21.2211 0.557861L22.5823 5.00925H26.9875L23.4236 7.76035L24.7849 12.2117L21.2211 9.46063L17.6572 12.2117L19.0185 7.76035L15.4546 5.00925H19.8598L21.2211 0.557861Z"
              fill="#FFE600"
            />
            <path
              d="M36 0.557861L37.4463 5.00925H42.1268L38.3402 7.76035L39.7866 12.2117L36 9.46063L32.2134 12.2117L33.6598 7.76035L29.8732 5.00925H34.5537L36 0.557861Z"
              fill="#FFE600"
            />
            <path
              d="M50.7789 0.557861L52.1402 5.00925H56.5454L52.9815 7.76035L54.3428 12.2117L50.7789 9.46063L47.2151 12.2117L48.5764 7.76035L45.0125 5.00925H49.4177L50.7789 0.557861Z"
              fill="#FFE600"
            />
            <path
              d="M65.5579 0.557861L67.0042 5.00925H71.6847L67.8981 7.76035L69.3445 12.2117L65.5579 9.46063L61.7713 12.2117L63.2177 7.76035L59.4311 5.00925H64.1116L65.5579 0.557861Z"
              fill="#FFE600"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Tcard;
