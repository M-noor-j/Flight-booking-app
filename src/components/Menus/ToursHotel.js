import React from "react";
import Card from "components/card/Card";
import "./css/ToursHotel.css";
const ToursHotel = () => {
  const data = [
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/19/de/45/a9/naran-is-a-small-town.jpg",
      title: "HUNZA",
      description: "7 days tour with food and hotel services",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Rakaposhi%2C_Nagar_GB_%28Pakistan%29.jpg",
      title: "BABUSAR TOP",
      description: "7 days tour with food and hotel services",
    },
    {
      img: "https://dreamvistatours.com/wp-content/uploads/2021/04/HUNZA-BLOG-PIC-1-1024x768.jpg",
      title: "MURRY",
      description: "7 days tour with food and hotel services",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/d5/96/2a/roomy-daastaan.jpg?w=1200&h=-1&s=1",
      title: "KASHMIR",
      description: "7 days tour with food and hotel services",
    },
    {
      img: "https://cdn.liponi.de/uploads/2022/07/Luxus-Hunza-2.jpg",
      title: "GILGIT",
      description: "7 days tour with food and hotel services",
    },
  ];
  return (
    <>
      <div className="text-dark mt-5 pt-5">
        <div className="img-tour-dashboard ">
          <div className="heading text-white display-4 text-capitalize fw-bold pt-4 ps-4">
            let's discover
            <br /> a new Tour Packages
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div className="col-4 ">
              <Card
                key={i}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToursHotel;
