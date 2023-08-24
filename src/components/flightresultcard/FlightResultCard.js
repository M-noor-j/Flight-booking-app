import React from "react";
import "./FlightResultCard.css";
const FlightResultCard = ({img,title,description, flightname, flightaction,   flighttime,   flightbom, flightgain, flightprice}) => {
  return (
    <>
      <div className="bg-white shadow rounded mt-4">
        <div className="d-flex justify-content-between align-items-center mx-3 py-3">
          <div className="img">
            <img src={img} alt=""  style={{width:"7rem"}}/>
          </div>
          <div className="jfk">
            <div className="text-center">{title}</div>
            <div className="text-center">{description}</div>
          </div>
          <div className="jfk">
            <div className="text-center">{flightname}</div>
            <div className="text-center">{flightaction}</div>
            <div className="text-center">{flighttime}</div>
          </div>
          <div className="jfk">
            <div>{flightbom}</div>
            <div>{flightgain}</div>
          </div>
          <div className="jfk">
            <div className="text-center fs-3 fw-bold">{flightprice}</div>
            <div>
                <button className="btn btn-ticket">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightResultCard;
