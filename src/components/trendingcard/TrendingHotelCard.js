import React from "react";
import { Link } from "react-router-dom";
import "./TrendingHotelCard.css";
const TrendingHotelCard = ({
  img,
  title,
  location,
  km,
  sectitle,
  description,
  dayofstay,
  pkr,
  taxes,
  path,
  layout,
}) => {
  return (
    <div className="bg-white rounded mt-5 py-2 px-2 shadow">
      <div className="d-flex align-items-center">
        <div className="">
          <img
            src={img}
            alt=""
            className=" rounded"
            style={{ width: "32rem" }}
          />
        </div>
        {/* content sharing */}
        <div className="content ms-3">
          <div className="fs-3 fw-bold ">{title}</div>
          <div className="d-flex ">
            <div style={{ fontSize: "12px" }}>{location}</div>
            <div className="ms-3" style={{ fontSize: "12px" }}>
              Shop on map
            </div>
            <div className="ms-3" style={{ fontSize: "12px" }}>
              {km}
            </div>
          </div>
          {/* <hr /> */}
          <div className=" fw-bold fs-5">{sectitle}</div>
          <div style={{ fontSize: "13px", width: "25rem" }} className=" mt-1">
            {description}
          </div>
        </div>
        {/* last content sharing */}
        <div
          className=" d-flex justify-content-end pe-3 align-items-center"
          style={{ width: "100%" }}
        >
          <div className="text-end">
            <div className="">{dayofstay}</div>
            <div className=" fw-bold ">{pkr}</div>
            <div className="">{taxes}</div>
            <Link
              to={layout + path}
              className="btn btn-ticket mt-1 px-3  shadow"
            >
              See avibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingHotelCard;
