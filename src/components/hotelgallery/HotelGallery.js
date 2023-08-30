import React from "react";
import "./HotelGallery.css";
import CardGrid from "components/cardgrid/CardGrid";
import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
const HotelGallery = () => {
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
      <div style={{ marginTop: "7rem" }}>
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
      </div>

      <div className="fs-5 fw-bold mt-4">Description Hotel</div>
      <div className="w-75 mt-3">
        Located in Islamabad, 16 km from Shah Faisal Mosque ,Noors B&B provide
        accomodation with a terrace,free private parking and a resturant.Amoung
        the facilities at this property are room are room service and a24-hour
        front desk,along with free Wifi thtough out the property.The property is
        non-smoking and is set 17km from ayub National park.
        <br />
        all unit at the hotel are equipped with a seating area. Fearturing a
        private bathroom with a shower and free toiletries,rooms at Noors B&B
        also provide guests with a city view.At the acommodation every room is
        fitted with bed lineed and towels
      </div>
      <div className="fs-5 fw-bold mt-4">Most Popular Facilities </div>
      <div className=" mt-4">
        <Icon
          as={MdHome}
          width="25px"
          height="25px"
          color="inherit"
          className="pb-1"
        />
        <span className=""> Free Wifi</span>
        <Icon
          as={MdHome}
          width="25px"
          height="25px"
          color="inherit"
          className="ms-5 pb-1"
        />
        <span> Airport Shuttle</span>
        <Icon
          as={MdHome}
          width="25px"
          height="25px"
          color="inherit"
          className="ms-5 pb-1"
        />
        <span>Room Services</span>
        <Icon
          as={MdHome}
          width="25px"
          height="25px"
          color="inherit"
          className="ms-5 pb-1"
        />
        <span> Free Parking </span>
        <Icon
          as={MdHome}
          width="25px"
          height="25px"
          color="inherit"
          className="ms-5 pb-1"
        />
        <span> Breakfast </span>
      </div>

      <div className="bg-white rounded shadow mt-4 py-4 px-4">
        <div className="fs-4">Propert Hightlihgts</div>

        <div className="d-flex mt-2">
          <div>
            <span className="fw-bold"> Breakfast info:</span> Halal,Asian
          </div>
          <div className="ms-5">
            <span className="fw-bold"> Room with:</span>Landmark view, City
            view, Free private parking available at the hotel
          </div>
        </div>
      </div>
      <Link className="btn btn-ticket mt-4">Book Now</Link>
    </>
  );
};

export default HotelGallery;
