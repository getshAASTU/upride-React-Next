import Image from "next/image";
import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <header className="header">
        <div className="left-header">
          <h3>
            <span className="span0">Learn Driving:</span>{" "}
            <span className="span4">
              Book <br />
            </span>
            <span className="span-1">Top Driving</span>{" "}
            <span className="span-2">Schools</span>{" "}
            <span className="span0">
              {" "}
              <br /> Near You
            </span>
          </h3>
          <p className="text">
            Empower yourself with safe and confident driving skills today. Book
            expert Instructors and top-rated driving schools near you.
          </p>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Search Location, Driving School or Services..."
            />
            <div className="search_container">
              <svg
                className="search_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.5766 8.89665C19.8047 4.61842 15.2575 2.18756 10.7159 3.09075C6.17429 3.99396 2.90314 7.97966 2.9031 12.6103C2.90308 15.184 3.92532 17.6524 5.74503 19.4727C9.01893 22.7473 14.1503 23.2535 18.0007 20.6811C21.8512 18.109 23.3482 13.1749 21.5766 8.89665ZM10.1497 0.24343C16.0499 -0.929924 21.9571 2.22799 24.2587 7.78587C26.5604 13.3438 24.6155 19.7535 19.6133 23.0951C14.6111 26.4368 7.9451 25.7793 3.69196 21.5251C1.32797 19.1607 -3.87071e-05 15.9539 8.4615e-10 12.6103C5.80628e-05 6.59459 4.24961 1.41678 10.1497 0.24343Z"
                  fill="#FF5757"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.7379 22.7396C23.3047 22.1727 24.2239 22.1727 24.7907 22.7396L29.5731 27.522C30.14 28.0889 30.14 29.008 29.5731 29.5749C29.0062 30.1417 28.0871 30.1417 27.5202 29.5749L22.7379 24.7925C22.171 24.2256 22.171 23.3065 22.7379 22.7396Z"
                  fill="#FF5757"
                />
              </svg>
              <button className="btn_svgContainer">
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
            </div>
          </div>
          <div className="btn-container">
            <button className="btn btn1">BOOK DRIVING SCHOOL</button>
            <button className="btn btn2">HIRE INSTRUCTORS</button>
          </div>
        </div>

        <div className="rightheader_container">
          <div className="right-header">
            <div className="img_one_container">
              <div className="sub_container_one">
                <svg
                  className="greenDot"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <circle
                    cx="18.9163"
                    cy="18.9698"
                    r="13.6783"
                    fill="#2EC2B8"
                    stroke="white"
                    strokeWidth="10"
                  />
                </svg>
              </div>
            </div>
            <div className="img_two_container">
              <div className="sub_container_two">
                <svg
                  className="redDot"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <circle
                    cx="18.6783"
                    cy="18.7073"
                    r="13.6783"
                    fill="#FD5444"
                    stroke="white"
                    strokeWidth="10"
                  />
                </svg>
              </div>
            </div>
            <div className="instructor">
              <div className="instructorImgContainer">
                <div className="instructorImg">
                  <Image
                    src="/one.png"
                    alt="instructor"
                    width={44}
                    height={43}
                  />
                </div>
                <div className="instructorText">
                  <h4>Priya Murthy</h4>
                  <p>Online</p>
                </div>
              </div>
              <h3 className="instructorHeader">Hi, I am your instructor</h3>
            </div>

            <div className="svg_container">
              <svg
                className="svg-background"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="140"
                viewBox="0 0 107 154"
                fill="none"
              >
                <path
                  d="M1.09168 143.974L0.639434 66.6401C0.619489 63.2295 2.33915 60.044 5.20143 58.1894L91.4785 2.28532C98.1318 -2.02575 106.916 2.74969 106.916 10.6776V143.915C106.916 149.438 102.439 153.915 96.9164 153.915H11.0915C5.59148 153.915 1.12384 149.474 1.09168 143.974Z"
                  fill="#FD5444"
                />
              </svg>

              <svg
                className="checklist"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
              >
                <g clipPath="url(#clip0_0_267)">
                  <path
                    d="M67.4899 9.65719C66.4686 8.63411 64.8115 8.63234 63.7901 9.65285L32.4001 40.96L21.0747 28.6595C20.0961 27.5972 18.4415 27.5283 17.3775 28.5068C16.3142 29.4854 16.2462 31.1408 17.2248 32.204L30.3949 46.5071C30.8772 47.0313 31.5522 47.3357 32.264 47.3505C32.2831 47.3513 32.3015 47.3513 32.3198 47.3513C33.0115 47.3513 33.6769 47.0766 34.1671 46.5882L67.4848 13.3578C68.5087 12.3374 68.5104 10.6803 67.4899 9.65719Z"
                    fill="white"
                  />
                  <path
                    d="M66.8584 32.2625C65.4132 32.2625 64.2419 33.4338 64.2419 34.8791C64.2419 51.1351 51.0179 64.3591 34.762 64.3591C18.507 64.3591 5.28197 51.1351 5.28197 34.8791C5.28197 18.6242 18.507 5.39915 34.762 5.39915C36.2072 5.39915 37.3786 4.22786 37.3786 2.78265C37.3786 1.33731 36.2072 0.166016 34.762 0.166016C15.6209 0.166016 0.0488281 15.7381 0.0488281 34.8791C0.0488281 54.0194 15.6209 69.5923 34.762 69.5923C53.9022 69.5923 69.4751 54.0194 69.4751 34.8791C69.4751 33.4339 68.3038 32.2625 66.8584 32.2625Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_267">
                    <rect
                      width="69.4262"
                      height="69.4262"
                      fill="white"
                      transform="translate(0.0488281 0.166016)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </header>
      <div className="customer">
        <div className="customerItem">
          <div className="customerSatisfy">
            <svg
              className="customerSvg_one"
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="51"
              viewBox="0 0 44 51"
              fill="none"
            >
              <path
                opacity="0.1"
                d="M20.9972 0.581196C21.6174 0.221734 22.3826 0.221734 23.0028 0.581196L43.0028 12.1721C43.62 12.5298 44 13.1892 44 13.9025V37.0975C44 37.8108 43.62 38.4702 43.0028 38.8279L23.0028 50.4188C22.3826 50.7783 21.6174 50.7783 20.9972 50.4188L0.997151 38.8279C0.379954 38.4702 0 37.8108 0 37.0975V13.9025C0 13.1892 0.379955 12.5298 0.997152 12.1721L20.9972 0.581196Z"
                fill="#0E63FF"
              />
            </svg>
            <svg
              className="customerSvg_two"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                d="M9.39925 19.3732C9.5394 19.4716 9.69789 19.5187 9.85469 19.5187C10.1192 19.5187 10.379 19.3845 10.5372 19.1364C11.8627 17.0573 14.0785 15.816 16.4644 15.816C18.8433 15.816 21.0554 17.0516 22.3818 19.1212C22.6348 19.5158 23.1445 19.6205 23.5204 19.355C23.8963 19.0895 23.996 18.5545 23.7431 18.1599C22.6833 16.5064 21.1638 15.2864 19.4274 14.6337C20.4688 13.7408 21.1348 12.3831 21.1348 10.865C21.1348 8.18239 19.0556 6 16.5 6C13.9444 6 11.8652 8.18239 11.8652 10.865C11.8652 12.3722 12.5216 13.7214 13.55 14.6145C11.7865 15.2648 10.2442 16.4996 9.17371 18.1787C8.92175 18.5739 9.02273 19.1087 9.39925 19.3732ZM16.5 7.72211C18.151 7.72211 19.4941 9.13201 19.4941 10.865C19.4941 12.5979 18.151 14.0078 16.5 14.0078C14.849 14.0078 13.5059 12.5979 13.5059 10.865C13.5059 9.13201 14.849 7.72211 16.5 7.72211ZM19.7713 21.2463L18.5484 22.1723C18.3665 22.3101 18.2903 22.5543 18.3598 22.7773L18.8523 24.2756C18.8731 24.3423 18.8811 24.4075 18.8784 24.4697C18.861 24.8721 18.3805 25.1474 18.0281 24.8805L16.8052 23.9542C16.7142 23.8854 16.6071 23.8509 16.5 23.8509C16.3929 23.8509 16.2859 23.8854 16.1949 23.9542L14.972 24.8805C14.6196 25.1474 14.1368 24.8721 14.1215 24.4697C14.1192 24.4075 14.1274 24.3423 14.1482 24.2756L14.6402 22.7773C14.7097 22.5543 14.6336 22.3101 14.4516 22.1723L13.2287 21.2463C12.8218 20.9382 13.0309 20.2074 13.5339 20.2074H15.0455C15.2704 20.2074 15.4697 20.1166 15.5392 19.8936L16.0063 18.3856C16.084 18.1364 16.292 18.0117 16.5 18.0117C16.7081 18.0117 16.9161 18.1364 16.9938 18.3856L17.4609 19.8936C17.5304 20.1166 17.7297 20.2074 17.9546 20.2074H19.4662C19.9691 20.2074 20.1782 20.9382 19.7713 21.2463ZM26.785 24.26L25.5621 25.186C25.3801 25.3238 25.304 25.568 25.3735 25.791L25.866 27.2893C25.8868 27.356 25.8948 27.4212 25.8921 27.4834C25.8747 27.8858 25.3942 28.1611 25.0417 27.8942L23.8189 26.9679C23.7279 26.8991 23.6208 26.8646 23.5137 26.8646C23.4066 26.8646 23.2995 26.8991 23.2086 26.9679L21.9857 27.8942C21.6333 28.1611 21.1505 27.8858 21.1352 27.4834C21.1329 27.4212 21.1411 27.356 21.1619 27.2893L21.6539 25.791C21.7234 25.568 21.6473 25.3238 21.4653 25.186L20.2424 24.26C19.8355 23.9519 20.0446 23.2211 20.5475 23.2211H22.0591C22.2841 23.2211 22.4834 23.1303 22.5529 22.9073L23.02 21.3993C23.0977 21.1501 23.3057 21.0254 23.5137 21.0254C23.7217 21.0254 23.9297 21.1501 24.0075 21.3993L24.4745 22.9073C24.5441 23.1303 24.7434 23.2211 24.9683 23.2211H26.4799C26.9828 23.2211 27.1919 23.9519 26.785 24.26ZM12.7577 24.26L11.5347 25.186C11.3528 25.3238 11.2766 25.568 11.3461 25.791L11.8386 27.2893C11.8594 27.356 11.8674 27.4212 11.8647 27.4834C11.8473 27.8858 11.3668 28.1611 11.0144 27.8942L9.79148 26.9679C9.70051 26.8991 9.59342 26.8646 9.48633 26.8646C9.37924 26.8646 9.27214 26.8991 9.18117 26.9679L7.95829 27.8942C7.60588 28.1611 7.12309 27.8858 7.10783 27.4834C7.10549 27.4212 7.1137 27.356 7.13449 27.2893L7.62652 25.791C7.69604 25.568 7.61987 25.3238 7.43793 25.186L6.215 24.26C5.80813 23.9519 6.01723 23.2211 6.52016 23.2211H8.03175C8.25668 23.2211 8.45602 23.1303 8.5255 22.9073L8.99258 21.3993C9.07031 21.1501 9.2783 21.0254 9.48633 21.0254C9.69436 21.0254 9.90235 21.1501 9.98007 21.3993L10.4472 22.9073C10.5167 23.1303 10.716 23.2211 10.9409 23.2211H12.4525C12.9554 23.2211 13.1645 23.9519 12.7577 24.26Z"
                fill="#0E63FF"
              />
              <circle cx="16.5" cy="10.5" r="3.5" fill="#0E63FF" />
            </svg>
          </div>
          <h2 className="customerHeading">100% Customer Satisfaction</h2>
        </div>
        <div className="customerItem">
          <div className="customerSatisy">
            <svg
              className="customerSvg_one"
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="51"
              viewBox="0 0 44 51"
              fill="none"
            >
              <path
                opacity="0.1"
                d="M20.9972 0.581196C21.6174 0.221734 22.3826 0.221734 23.0028 0.581196L43.0028 12.1721C43.62 12.5298 44 13.1892 44 13.9025V37.0975C44 37.8108 43.62 38.4702 43.0028 38.8279L23.0028 50.4188C22.3826 50.7783 21.6174 50.7783 20.9972 50.4188L0.997151 38.8279C0.379954 38.4702 0 37.8108 0 37.0975V13.9025C0 13.1892 0.379955 12.5298 0.997152 12.1721L20.9972 0.581196Z"
                fill="#F72A75"
              />
            </svg>
            <svg
              className="customerSvg_two_two"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M9.85681 11.3145L11.7192 9.45206C11.3004 9.18472 10.8038 9.02905 10.2711 9.02905C8.78247 9.02905 7.57138 10.2401 7.57138 11.7288C7.57138 13.2174 8.78247 14.4285 10.2711 14.4285C11.7597 14.4285 12.9708 13.2174 12.9708 11.7288C12.9708 11.1962 12.8152 10.6995 12.5478 10.2807L10.6854 12.1431L9.85681 11.3145Z"
                fill="#F72A75"
              />
              <path
                d="M19.5423 11.7289C19.5423 10.1366 19.1355 8.57952 18.3632 7.20151L16.0547 7.51784C16.918 8.7003 17.4284 10.156 17.4284 11.7289C17.4284 15.6755 14.2177 18.8862 10.2711 18.8862C6.32449 18.8862 3.11379 15.6755 3.11379 11.7289C3.11379 7.78233 6.32457 4.57159 10.2711 4.57159C11.844 4.57159 13.2997 5.08198 14.4822 5.9453L14.7985 3.63679C13.4205 2.86452 11.8634 2.45776 10.2711 2.45776C7.79473 2.45776 5.46652 3.42214 3.71547 5.17323C1.96437 6.92429 1 9.25249 1 11.7289C1 14.2053 1.96437 16.5335 3.71547 18.2846C5.46652 20.0357 7.79469 21 10.2711 21C12.7476 21 15.0757 20.0357 16.8268 18.2846C18.5779 16.5335 19.5423 14.2053 19.5423 11.7289Z"
                fill="#F72A75"
              />
              <path
                d="M10.2711 5.74341C6.97075 5.74341 4.28568 8.42845 4.28568 11.7289C4.28568 15.0293 6.97071 17.7143 10.2711 17.7143C13.5716 17.7143 16.2566 15.0293 16.2566 11.7289C16.2566 10.2892 15.7456 8.96677 14.8956 7.93306L13.3904 9.43825C13.8631 10.0801 14.1428 10.8724 14.1428 11.7289C14.1428 13.8637 12.406 15.6005 10.2712 15.6005C8.13638 15.6005 6.39958 13.8637 6.39958 11.7289C6.39958 9.59407 8.13638 7.85728 10.2712 7.85728C11.1277 7.85728 11.9199 8.137 12.5618 8.60966L14.067 7.10446C13.0333 6.25438 11.7108 5.74341 10.2711 5.74341Z"
                fill="#F72A75"
              />
              <path
                d="M18.5903 1L15.986 3.60434L15.6033 6.39691L18.3959 6.01422L21.0002 3.40988L19.2423 2.75789L18.5903 1Z"
                fill="#F72A75"
              />
            </svg>
          </div>
          <h2 className="customerHeading">Safer Roads is Our Mission</h2>
        </div>
        <div className="customerItem">
          <div className="customerSatisy">
            <svg
              className="customerSvg_one"
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="51"
              viewBox="0 0 44 51"
              fill="none"
            >
              <path
                opacity="0.1"
                d="M20.9972 0.581196C21.6174 0.221734 22.3826 0.221734 23.0028 0.581196L43.0028 12.1721C43.62 12.5298 44 13.1892 44 13.9025V37.0975C44 37.8108 43.62 38.4702 43.0028 38.8279L23.0028 50.4188C22.3826 50.7783 21.6174 50.7783 20.9972 50.4188L0.997151 38.8279C0.379954 38.4702 0 37.8108 0 37.0975V13.9025C0 13.1892 0.379955 12.5298 0.997152 12.1721L20.9972 0.581196Z"
                fill="#10D0A1"
              />
            </svg>
            <svg
            className="customerSvg_two_two"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
            >
              <path
                d="M17.9881 17.9694C17.9881 17.9694 15.6408 13.9352 15.2198 13.2116C15.6988 13.0655 16.2091 12.9364 16.4212 12.5703C16.7745 11.9603 16.1455 10.9595 16.3107 10.3056C16.4808 9.63266 17.4852 9.05034 17.4852 8.36628C17.4852 7.69982 16.4468 6.92123 16.2766 6.2522C16.1102 5.59844 16.7374 4.59661 16.3829 3.98731C16.0283 3.37794 14.8475 3.42801 14.3614 2.96027C13.8613 2.47894 13.8628 1.30125 13.2596 0.97868C12.6539 0.654911 11.6695 1.30925 10.997 1.15425C10.3321 1.00103 9.73814 0 9.04368 0C8.33893 0 7.21799 1.13551 7.04219 1.17637C6.37002 1.33263 5.38437 0.679887 4.77929 1.00503C4.17662 1.32868 4.18034 2.50648 3.68111 2.98862C3.19583 3.45722 2.01494 3.40932 1.66151 4.01937C1.30813 4.6293 1.93716 5.62981 1.77204 6.28404C1.60647 6.93992 0.567094 7.60449 0.567094 8.36302C0.567094 9.04714 1.57401 9.62764 1.74518 10.3003C1.91155 10.954 1.28442 11.9557 1.63893 12.5653C1.83194 12.897 2.26984 13.0332 2.70717 13.1642C2.75821 13.1794 2.85474 13.2365 2.78936 13.3318C2.49016 13.8482 0.0820401 18.0043 0.0820401 18.0043C-0.109535 18.3349 0.0460339 18.6182 0.427642 18.6343L2.29556 18.7122C2.67717 18.7283 3.15588 19.0056 3.35957 19.3287L4.35631 20.9103C4.56 21.2334 4.8832 21.2273 5.07472 20.8968C5.07472 20.8968 7.86359 16.0819 7.86473 16.0806C7.92069 16.0152 7.97692 16.0286 8.00384 16.0515C8.30898 16.3113 8.73437 16.5705 9.0894 16.5705C9.43757 16.5705 9.75997 16.3265 10.0789 16.0544C10.1048 16.0323 10.168 15.9869 10.2142 16.081C10.2149 16.0825 13.0007 20.871 13.0007 20.871C13.1927 21.2011 13.516 21.2067 13.719 20.8833L14.713 19.2997C14.9161 18.9764 15.3943 18.698 15.7759 18.6814L17.6437 18.6C18.0251 18.5833 18.1801 18.2995 17.9881 17.9694ZM12.1307 13.6384C10.0654 14.8399 7.5864 14.7111 5.69294 13.5168C2.91846 11.7397 2.00557 8.06337 3.67345 5.18465C5.36036 2.27273 9.06859 1.24524 12.0068 2.84545C12.0222 2.85386 12.0374 2.86254 12.0528 2.87112C12.0745 2.88318 12.0963 2.89541 12.1179 2.90775C13.0244 3.43035 13.8104 4.18883 14.3732 5.15625C16.0934 8.11309 15.0874 11.9182 12.1307 13.6384Z"
                fill="#10D0A1"
              />
              <path
                d="M11.6585 3.77797C11.65 3.773 11.6413 3.76837 11.6327 3.76346C10.0632 2.85507 8.06271 2.78866 6.38614 3.76409C3.89818 5.21153 3.05158 8.41316 4.49902 10.9011C4.9407 11.6603 5.54594 12.2663 6.24423 12.7013C6.30361 12.7389 6.36368 12.7758 6.42506 12.8114C8.91571 14.2543 12.1156 13.402 13.5585 10.9114C15.0013 8.42076 14.1492 5.2209 11.6585 3.77797ZM12.2816 7.84958L11.4095 8.69961C11.1394 8.96285 10.9706 9.48249 11.0344 9.85426L11.2403 11.0545C11.3041 11.4263 11.0831 11.5868 10.7492 11.4113L9.67127 10.8446C9.33739 10.6691 8.79106 10.6691 8.45718 10.8446L7.37928 11.4113C7.0454 11.5868 6.82439 11.4263 6.88817 11.0545L7.09403 9.85426C7.15782 9.48249 6.98899 8.96285 6.71888 8.69961L5.84685 7.84958C5.57669 7.58633 5.66116 7.32652 6.03443 7.27222L7.23954 7.09711C7.61281 7.04287 8.05483 6.72173 8.22177 6.3835L8.76072 5.29149C8.92766 4.95326 9.20085 4.95326 9.36773 5.29149L9.90674 6.3835C10.0737 6.72173 10.5156 7.04287 10.889 7.09711L12.0941 7.27222C12.4673 7.32652 12.5517 7.58633 12.2816 7.84958Z"
                fill="#10D0A1"
              />
            </svg>
          </div>
          <h2 className="customerHeading">100% Best Quality service</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
