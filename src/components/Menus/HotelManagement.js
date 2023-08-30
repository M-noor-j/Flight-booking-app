import React from "react";
import "./css/HotelManagement.css";
import "../cardgrid/CardGrid";
import CardGrid from "../cardgrid/CardGrid";
const HotelManagement = () => {
  const data = [
    {
      titleone: "peshawar",
      titletwo: "karachi",
      titlethree: "Lahore",
      titlefour: "Gujranwala",
      titlefive: "Rawalpindi",
      path: "/trending-hotel",
      layout: "/admin",
    },
  ];
  return (
    <>
      <div className="text-dark mt-5 pt-5">
        <div className="img-hotel-dashboard ">
          <div className="heading text-white display-4 text-capitalize fw-bold pt-4 ps-4">
            BOOK NOW
            <br /> YOU HOTEL ONLINE
          </div>
        </div>
      </div>
      <div className="fs-3 mt-5 fw-bold">Trending places</div>
      {data.map((item, index) => (
        <div key={index}>
          <CardGrid
            titleone={item.titleone}
            titletwo={item.titletwo}
            titlethree={item.titlethree}
            titlefour={item.titlefour}
            titlefive={item.titlefive}
            path={item.path}
            layout={item.layout}
          />
        </div>
      ))}
    </>
  );
};

export default HotelManagement;
