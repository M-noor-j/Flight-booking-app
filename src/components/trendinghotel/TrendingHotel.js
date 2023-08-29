import React from "react";
import "./TrendingHotel.css";
import TrendingHotelCard from "components/trendingcard/TrendingHotelCard";
const TrendingHotel = () => {
  return (
    <>
      <div className="img-main-dashboard " style={{ marginTop: "6rem" }}>
        <div className="heading text-white display-4 text-capitalize fw-bold pt-4 ps-4">
          let's discover
          <br /> a new adventure
        </div>
      </div>

      {/* content start */}
      <div className="title-trending fs-5 fw-bold mt-3">Trending Hotels</div>
      {/* ///////// */}
      <div className="row mt-3">
        <div className="col">
          <div
            className="bg-white py-4 px-5 shadow"
            style={{ borderRadius: "20px" }}
          >
            <div className="fs-4 fw-bold">Difference From Center Lahore</div>
            <div className="d-flex mt-2">
              <input type="checkbox" />
              <div className="ms-4 fs-5">Less than 1 km (7)</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" />
              <div className="ms-4 fs-5">Less than 1 km (7)</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" />
              <div className="ms-4 fs-5">Less than 1 km (7)</div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="col">
          <div
            className="bg-white py-4 px-5 shadow"
            style={{ borderRadius: "20px" }}
          >
            <div className="fs-4 fw-bold">Property Type</div>
            <div className="d-flex mt-2">
              <input type="checkbox" />
              <div className="ms-4 fs-5">Less than 1 km (7)</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" />
              <div className="ms-4 fs-5">Less than 1 km (7)</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" />
              <div className="ms-4 fs-5">Less than 1 km (7)</div>
            </div>
          </div>
        </div>
      </div>
      <TrendingHotelCard />
    </>
  );
};

export default TrendingHotel;
