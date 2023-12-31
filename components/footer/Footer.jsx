import React from "react";
import "./footer.css";
import { footerLinks } from "@/constants/datas";
import Image from "next/image";
const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <div>
          <Image width={146} height={40} src="/three.png" alt="logo" />
        </div>
        <div>
          <p className="footerText">
            Sometimes features require a short description. This can be detailed
            description or just a short text.
          </p>
        </div>
        <div>
          <h4>Download App</h4>
          <p>Available On</p>
          <div className="storeLink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <path
                d="M38.8387 0H4.16129C1.86307 0 0 1.86307 0 4.16129V38.8387C0 41.1369 1.86307 43 4.16129 43H38.8387C41.1369 43 43 41.1369 43 38.8387V4.16129C43 1.86307 41.1369 0 38.8387 0Z"
                fill="#E5E6E8"
              />
              <path
                d="M38.8387 0H4.16129C3.05765 0 1.99921 0.43842 1.21881 1.21881C0.43842 1.99921 0 3.05765 0 4.16129V11.0968C0 15.1435 1.60754 19.0244 4.46898 21.8859C7.33043 24.7473 11.2114 26.3548 15.2581 26.3548H27.7419C31.7886 26.3548 35.6696 24.7473 38.531 21.8859C41.3925 19.0244 43 15.1435 43 11.0968V4.16129C43 3.05765 42.5616 1.99921 41.7812 1.21881C41.0008 0.43842 39.9424 0 38.8387 0Z"
                fill="#F2F2F2"
              />
              <path
                d="M38.8387 0H4.16129C3.05765 0 1.99921 0.43842 1.21881 1.21881C0.43842 1.99921 0 3.05765 0 4.16129V6.93548C0 5.83184 0.43842 4.7734 1.21881 3.99301C1.99921 3.21261 3.05765 2.77419 4.16129 2.77419H38.8387C39.9424 2.77419 41.0008 3.21261 41.7812 3.99301C42.5616 4.7734 43 5.83184 43 6.93548V4.16129C43 3.05765 42.5616 1.99921 41.7812 1.21881C41.0008 0.43842 39.9424 0 38.8387 0Z"
                fill="#FAFAFA"
              />
              <path
                d="M38.8387 40.2257H4.16129C3.05765 40.2257 1.99921 39.7873 1.21881 39.0069C0.43842 38.2265 0 37.1681 0 36.0645V38.8386C0 39.9423 0.43842 41.0007 1.21881 41.7811C1.99921 42.5615 3.05765 42.9999 4.16129 42.9999H38.8387C39.9424 42.9999 41.0008 42.5615 41.7812 41.7811C42.5616 41.0007 43 39.9423 43 38.8386V36.0645C43 37.1681 42.5616 38.2265 41.7812 39.0069C41.0008 39.7873 39.9424 40.2257 38.8387 40.2257Z"
                fill="#B8B8BA"
              />
              <path
                d="M33.4843 19.4125C33.8476 19.6266 34.1487 19.9318 34.3579 20.2979C34.5671 20.6641 34.6771 21.0784 34.6771 21.5001C34.6771 21.9218 34.5671 22.3361 34.3579 22.7022C34.1487 23.0684 33.8476 23.3736 33.4843 23.5877L28.5255 26.5075L28.4353 26.3549L23.5805 21.5001L28.4353 16.6453L28.5255 16.4927L33.4843 19.4125Z"
                fill="#FFDF64"
              />
              <path
                d="M9.01615 36.0645L23.5807 21.5L28.4355 26.3548L28.5257 26.5074L11.61 36.4598C11.2724 36.6542 10.8899 36.757 10.5003 36.7581C10.2144 36.7581 9.93119 36.7017 9.667 36.5923C9.40282 36.4828 9.1628 36.3223 8.96066 36.12L9.01615 36.0645Z"
                fill="#D74838"
              />
              <path
                d="M10.5003 6.2417C10.8899 6.24278 11.2724 6.34558 11.61 6.53993L28.5257 16.4923L28.4355 16.6449L23.5807 21.4998L9.01615 6.93525L8.96066 6.87976C9.1628 6.67747 9.40282 6.51699 9.667 6.40751C9.93119 6.29802 10.2144 6.24168 10.5003 6.2417Z"
                fill="#62D96E"
              />
              <path
                d="M9.01594 6.93537L23.5805 21.4999L9.01594 36.0644L8.96045 36.1199C8.75816 35.9178 8.59768 35.6777 8.4882 35.4135C8.37871 35.1494 8.32237 34.8662 8.32239 34.5802V8.41956C8.32237 8.13359 8.37871 7.85041 8.4882 7.58622C8.59768 7.32204 8.75816 7.08202 8.96045 6.87988L9.01594 6.93537Z"
                fill="#01B5FF"
              />
              <path
                d="M33.4843 23.5878L28.5255 26.5076L11.6098 36.46C11.2722 36.6544 10.8897 36.7572 10.5001 36.7583C9.92261 36.7581 9.3688 36.5286 8.96044 36.1202C8.55207 35.7119 8.32257 35.158 8.32239 34.5805V36.6612C8.32257 37.2387 8.55207 37.7925 8.96044 38.2009C9.3688 38.6092 9.92261 38.8387 10.5001 38.8389C10.8897 38.8378 11.2722 38.735 11.6098 38.5407L28.5255 28.5883L33.4843 25.6684C34.0074 25.3625 34.396 24.8706 34.5726 24.2909C34.7492 23.7112 34.7009 23.0862 34.4373 22.5405C34.2317 22.9772 33.8997 23.3421 33.4843 23.5878Z"
                fill="#B8B8BA"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <path
                d="M34.3097 0H8.68491C3.88562 0 0 3.88562 0 8.68491V34.3151C0 39.109 3.88562 42.9946 8.68491 42.9946H34.3151C39.109 42.9946 43 39.109 43 34.3097V8.68491C42.9946 3.88562 39.109 0 34.3097 0Z"
                fill="url(#paint0_linear_0_54)"
              />
              <path
                d="M21.314 9.8778L22.1847 8.37296C22.7221 7.43242 23.9205 7.11538 24.8611 7.6528C25.8016 8.19021 26.1187 9.38867 25.5812 10.3292L17.1919 24.8507H23.2595C25.2265 24.8507 26.3282 27.1617 25.4737 28.7632H7.68476C6.59918 28.7632 5.72852 27.8925 5.72852 26.8069C5.72852 25.7214 6.59918 24.8507 7.68476 24.8507H12.6722L19.0569 13.7849L17.063 10.3238C16.5256 9.3833 16.8427 8.19559 17.7832 7.64742C18.7238 7.11001 19.9115 7.42705 20.4596 8.36759L21.314 9.8778Z"
                fill="white"
              />
              <path
                d="M13.7692 30.7786L11.8882 34.0408C11.3508 34.9814 10.1524 35.2984 9.21183 34.761C8.27129 34.2236 7.95425 33.0251 8.49166 32.0846L9.88899 29.6662C11.469 29.1771 12.7534 29.5533 13.7692 30.7786Z"
                fill="white"
              />
              <path
                d="M29.9664 24.8615H35.0559C36.1415 24.8615 37.0121 25.7321 37.0121 26.8177C37.0121 27.9033 36.1415 28.7739 35.0559 28.7739H32.229L34.1368 32.0845C34.6743 33.0251 34.3572 34.2128 33.4167 34.7609C32.4761 35.2984 31.2884 34.9813 30.7403 34.0408C27.5264 28.4676 25.1133 24.2972 23.5118 21.5186C21.8726 18.6917 23.0443 15.854 24.1997 14.8921C25.4843 17.0956 27.4029 20.4223 29.9664 24.8615Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_54"
                  x1="21.5"
                  y1="0"
                  x2="21.5"
                  y2="42.9946"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00BFFC" />
                  <stop offset="1" stopColor="#0073F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="rightFooter">
        {footerLinks.map((obj) => (
          <div>
            <div key={Object.keys(obj)[0]}>
              <h4>{Object.keys(obj)[0]}</h4>
              <ul>
                {obj[Object.keys(obj)[0]].map((item) => (
                  <li className="footerList" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
