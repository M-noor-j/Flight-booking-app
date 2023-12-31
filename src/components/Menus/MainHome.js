import React from "react";
import "./css/MainHome.css";
import Card from "../card/Card";
import FlightDetails from "components/card/FlightDetails";
import PaymentInfo from "components/paymentinfo/PaymentInfo";
const MainHome = () => {
  const data = [
    {
      img: "https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=",
      title: "BY AIR",
      description: "Book FLight",
      path: "/flight-management",
      layout: "/admin",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHy1aArkmV_9WR7HP3_RVw4a6Y4ouB3HW_g&usqp=CAU",
      title: "BY BUS",
      description: "Book Bus Seat",
      path: "/flight-management",
      layout: "/admin",
    },
    {
      img: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
      title: "HOTELS",
      description: "Book HOtel to stay",
      path: "/flight-management",
      layout: "/admin",
    },
    {
      img: "https://www.trips.pk/assets/images/banner/tours.jpg",
      title: "TOUR PACKAGES",
      description: "Custom tour packages",
      path: "/flight-management",
      layout: "/admin",
    },
    {
      img: "https://www.india.com/wp-content/uploads/2022/03/International-Flights-Latest-Update.jpg",
      title: "BY AIR",
      description: "Book FLight",
      path: "/flight-management",
      layout: "/admin",
    },
  ];
  return (
    <div className="text-dark mt-5 pt-5">
      <div className="img-main-dashboard ">
        <div className="heading text-white display-4 text-capitalize fw-bold pt-4 ps-4">
          let's discover
          <br /> a new adventure
        </div>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-4 " key={index}>
            <Card
              img={item.img}
              title={item.title}
              description={item.description}
              path={item.path}
              layout={item.layout}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainHome;
