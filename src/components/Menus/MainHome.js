import React from "react";
import "./css/MainHome.css";
import Card from "../card/Card";
const MainHome = () => {
  const data = [
    {
      img: "https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=",
      title: "BY AIR",
      description: "Book FLight",
    },
    {
      img: "https://www.moneysavingexpert.com/content/dam/mse/editorial-image-library/guide-images/hero-images/hero-travel-cheap-flights.jpg",
      title: "BY AIR",
      description: "Book FLight",
    },
    {
      img: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/Getty-1-1.jpg",
      title: "BY AIR",
      description: "Book FLight",
    },
    {
      img: "https://www.india.com/wp-content/uploads/2022/03/International-Flights-Latest-Update.jpg",
      title: "BY AIR",
      description: "Book FLight",
    },
    {
      img: "https://www.india.com/wp-content/uploads/2022/03/International-Flights-Latest-Update.jpg",
      title: "BY AIR",
      description: "Book FLight",
    },
  ];
  return (
    <div className="text-dark mt-5 pt-5">
      <div className="img-main-dashboard ">
        <div className="heading text-white display-4 text-capitalize fw-bold pt-4 ps-4">
          {" "}
          let's discover
          <br /> a new adventure
        </div>
      </div>
      <div className="row">
        {data.map((item, i) => (
          <div className="col-4">
            <Card 
            key={i}
            img={item.img} 
            title={item.title}
            description={item.description}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainHome;
