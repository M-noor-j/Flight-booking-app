import React from "react";
import "./TrendingHotel.css";
import TrendingHotelCard from "components/trendingcard/TrendingHotelCard";
import { layout } from "@chakra-ui/system";
const TrendingHotel = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "OWN IT",
      location: "Islamabad",
      km: "2.5 km from center ",
      sectitle: "Apartment with Blacony",
      desciption:
        "Entire Apartment, 2 bedroom,1 living room ,2 bathroom,1 kitchen",
      dayofstay: "20 nights",
      pkr: "250,673",
      taxes: "+PKR 563,837 taxes and charges",
      path: "/Hotel-gallery",
      layout: "/admin",
    },
    {
      img: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Lawish Apartment",
      location: "Lahore",
      km: "2.5 km from center ",
      sectitle: "Apartment with Blacony",
      desciption:
        "Entire Apartment, 2 bedroom,1 living room ,2 bathroom,1 kitchen",
      dayofstay: "20 nights",
      pkr: "250,673",
      taxes: "+PKR 563,837 taxes and charges",
      path: "/Hotel-gallery",
      layout: "/admin",
    },
    {
      img: "https://www.travelandleisure.com/thmb/K61cQn9BXFJ9UqWJm1Hghb_tpfU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-charleston-hotels-loutrel-00-CHASHOTELSWB22-6c8667e894454e62a2161dc78af05f1e.jpg",
      title: "OWN IT",
      location: "Islamabad",
      km: "2.5 km from center ",
      sectitle: "Apartment with Blacony",
      desciption:
        "Entire Apartment, 2 bedroom,1 living room ,2 bathroom,1 kitchen",
      dayofstay: "20 nights",
      pkr: "250,673",
      taxes: "+PKR 563,837 taxes and charges",
      path: "/Hotel-gallery",
      layout: "/admin",
    },
  ];
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
      {/* <TrendingHotelCard /> */}
      {data.map((item, index) => (
        <div key={index}>
          <TrendingHotelCard
            img={item.img}
            title={item.title}
            location={item.location}
            km={item.km}
            sectitle={item.sectitle}
            desciption={item.desciption}
            dayofstay={item.dayofstay}
            pkr={item.pkr}
            taxes={item.taxes}
            path={item.path}
            layout={item.layout}
          />
        </div>
      ))}
    </>
  );
};

export default TrendingHotel;
