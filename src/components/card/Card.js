import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Location from "../../assets/Location.png";
import icon from "../../assets/icon.png";
const Card = ({ img, title, description }) => {
  return (
    <>
      <div className="container-card mt-5 shadow">
        <a id="cubeLink" href="">
          <svg
            id="eye"
            width="48"
            height="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h48v48H0z" />
              <path
                d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </g>
          </svg>
          <img id="cube" src={img} alt="image-equilibrium" border="0" />
        </a>

        <div id="ethAndDays" className="">
          <div id="ethPlusIcon" className="d-flex align-items-center">
            <img src={Location} alt="" style={{ width: "20px" }} className="" />
            <p id="eth" className="ms-2">
              {title}
            </p>
          </div>

          <div id="clockPlusDays">
            <div className="d-flex align-items-center">
          <img src={icon} alt="" style={{ width: "10px" ,height:"10px"}} className="" />
            <p id="days" className="ms-2">4.5</p>
            </div>
          </div>
        </div>
        <p className="flight-text pt-1 w-50">{description}</p>
      </div>
    </>
  );
};

export default Card;
