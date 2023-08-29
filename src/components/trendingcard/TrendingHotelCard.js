import React from "react";
import "./TrendingHotelCard.css";
const TrendingHotelCard = () => {
  return (
    <div className="bg-white rounded mt-5 py-2 px-2 shadow">
      <div className="d-flex ">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
            className=" rounded"
           style={{width:"20rem"}}
          />
        </div>
        {/* content sharing */}
        <div className="content ms-3">
          <div className="fs-2 fw-bold">OWN IT</div>
          <div className="d-flex mt-1">
            <div style={{ fontSize: "17px" }}>Islamabad</div>
            <div className="ms-3" style={{ fontSize: "17px" }}>
              Shop on map
            </div>
            <div className="ms-3" style={{ fontSize: "17px" }}>
              2.5 km from center
            </div>
          </div>
          {/* <hr /> */}
          <div className=" fw-bold mt-2">Apartment with balcony</div>
          <div style={{ fontSize: "13px" }} className="w-75 mt-2">
            Entire Apartment,2 bedrooms,1 living room, 2 bathroom, 1 kitchen, 3
            bed, ( 1 sofa bed ,2 large double)
          </div>
        </div>
        {/* last content sharing */}
        <div
          className=" d-flex justify-content-end pe-3"
         
        >
          <div className="text-end">
            <div className="">39 night, 2 adult</div>
            <div className="fs-5 fw-bold">PKR 260,456</div>
            <div className="">+PKR 61,288 taxes and charges</div>
            <button className="btn btn-ticket mt-2 px-3 fs-5 shadow">See avibility</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingHotelCard;