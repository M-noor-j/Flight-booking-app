import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import "./HotelPayment.css"
const HotelPayment = () => {
  return (
    <>
      <div className="img-main-dashboard" style={{ marginTop: "6rem" }}>
        <div className="heading text-white display-4 text-capitalize fw-bold pt-4 ps-4">
          let's discover
          <br /> a new adventure
        </div>
      </div>

      {/* ///// */}
      <div className="bg-white w-50 mt-5 py-4  shadow bg-radius">
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <Icon as={MdHome} color="inherit" className="fs-2 pb-2" />
            <span className="fs-5"> Date </span>
          </div>
          <div className="fs-5">check in-check out</div>
          <div>
            <Icon as={MdHome} color="inherit" className="fs-2 pb-2" />
            <span className="fs-5"> Date </span>
          </div>
        </div>
      </div>

      {/* ///// */}
      <div className="fs-4 fw-bold mt-4">Enter your Details</div>
      {/* ///// */}
      <div className="d-flex">
        <div>
          <div className="mt-3 " style={{ fontSize: "18px" }}>
            First Name
          </div>
          <input
            type="text"
            placeholder="First Name"
            className=" shadow  py-3 px-4 mt-2 input-radius border-1"
            style={{ width: "23rem" }}
          />
        </div>
        <div className="ms-5">
          <div className="mt-3 " style={{ fontSize: "18px" }}>
            Last Name
          </div>
          <input
            type="text"
            placeholder="Last Name"
            className=" shadow input-radius py-3 px-4 mt-2 border-1"
            style={{ width: "23rem" }}
          />
        </div>
        {/* //// */}
      </div>
      {/* second */}
      {/* ///// */}

      <div className="d-flex mt-3">
        <div>
          <div className="mt-3 " style={{ fontSize: "18px" }}>
            Email Address
          </div>
          <input
            type="text"
            placeholder="Email"
            className=" shadow input-radius py-3 px-4 mt-2 border-1"
            style={{ width: "23rem" }}
          />
        </div>
        <div className="ms-5">
          <div className="mt-3 " style={{ fontSize: "18px" }}>
          Phone Number
          </div>
          <input
            type="text"
            placeholder="Number"
            className=" shadow input-radius py-3 px-4 mt-2 border-1"
            style={{ width: "23rem" }}
          />
        </div>
        {/* //// */}
    
      </div>
      <div className="bg-white w-50 py-5 px-5 mt-5 shadow summary-radius">
            <div className="fs-3 fw-bold">Your Price Summary</div>
            <div className="mt-2 fw-bold">Price: PKR 1,228,500</div>
            <div className="mt-2 fw-bold">Price Information : Excludes PKR 3043,43 in taxes and charges</div>
            <button className="btn btn-ticket mt-3 shadow">Book now</button>
        </div>
    </>
  );
};

export default HotelPayment;
