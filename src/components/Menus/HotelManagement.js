import React from "react";
import "./css/HotelManagement.css";
import "../cardgrid/CardGrid"
import CardGrid from "../cardgrid/CardGrid";
const HotelManagement = () => {
  const data =[
    {
   title:"peshawar",
   img:"",
    },
  ]
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
    
   <CardGrid/>
    </>
  );
};

export default HotelManagement;
