import React from "react";
import "../Menus/css/Flight.css";
import FlightResultCard from "components/flightresultcard/FlightResultCard";
const Flight = () => {
  const data = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/2560px-Qatar_Airways_logo.svg.png",
      title: "JFK",
      description: "13:00",
      flightname:"Qatar",
      flightaction:"11H 20M",
      flighttime:"NON STOP",
      flightbom:"BOM",
      flightgain:"14:20",
      price:"$1590"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pakistan_International_Airlines_Logo.svg/2560px-Pakistan_International_Airlines_Logo.svg.png",
      title: "JFK",
      description: "13:00",
      flightname:"PIA",
      flightaction:"11H 20M",
      flighttime:"NON STOP",
      flightbom:"BOM",
      flightgain:"14:20",
      price:"$1340"
    },
    {
      img: "https://seeklogo.com/images/E/Emirates_Airlines-logo-3A6A7D24CA-seeklogo.com.png",
      title: "JFK",
      description: "13:00",
      flightname:"EMIRATES",
      flightaction:"11H 20M",
      flighttime:"NON STOP",
      flightbom:"BOM",
      flightgain:"14:20",
      price:"$1590"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/2560px-Qatar_Airways_logo.svg.png",
      title: "JFK",
      description: "13:00",
      flightname:"Qatar",
      flightaction:"11H 20M",
      flighttime:"NON STOP",
      flightbom:"BOM",
      flightgain:"14:20",
      price:"$1590"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/2560px-Qatar_Airways_logo.svg.png",
      title: "JFK",
      description: "13:00",
      flightname:"Qatar",
      flightaction:"11H 20M",
      flighttime:"NON STOP",
      flightbom:"BOM",
      flightgain:"14:20",
      price:"$1590"
    },
  ];
  return (
    <>
      <div className="text-dark mt-5 pt-5">
        <div className="img-Flight-dashboard ">
          <div className="heading text-white display-4 text-capitalize fw-bold pt-4 ps-4">
            let's discover
            <br /> a new adventure
          </div>
        </div>
      </div>
      {/* Card input content start */}
      <div className="bg-white shadow bg-comp pb-5 mt-3">
        <div className="row">
          <div className="col-8">
            <div className="d-flex justify-content-center">
              <div
                className="container bg-white shadow mt-5 mx-3 border-1"
                style={{ borderRadius: "60px" }}
              >
                <div className="row">
                  {/* <br /> */}

                  <div className="d-flex justify-content-around">
                    <div className="box d-flex py-3 ">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/0/619.png"
                        alt=""
                        style={{ width: "2rem" }}
                      />
                      <select
                        className="selectpicker des selector"
                        data-show-subtext="false"
                        data-live-search="true"
                      >
                        <option value="ALVA">Aluva</option>
                        <option value="PNCU">Pulinchudu</option>
                        <option value="CPPY">CompanyPady</option>
                        <option value="ATTK">Ambattukavu</option>
                        <option value="MUTT">Muttom</option>
                        <option value="KLMT">Kalamassery</option>
                        <option value="CCUV">Cusat</option>
                        <option value="PDPM">Pathadipalam</option>
                        <option value="EDAP">Edapally Jn.</option>
                        <option value="CGPP">Changampuzha Park</option>
                        <option value="PARV">Palarivattom</option>
                        <option value="JLSD">JLN Stadium</option>
                        <option value="KALR">Kaloor</option>
                        <option value="LSSE">Lissie Jn</option>
                        <option value="MGRD">MG Road</option>
                        <option value="MACE">Maharaja College</option>
                        <option value="">undefined</option>
                      </select>
                      <div className="exhange-img ms-5">
                        <img
                          src="https://icons.veryicon.com/png/o/miscellaneous/simple-icon/exchange-14.png"
                          alt=""
                          style={{ width: "2rem" }}
                        />
                      </div>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/0/619.png"
                        alt=""
                        style={{ width: "2rem" }}
                        className="ms-5"
                      />
                      <select
                        className="selectpicker des selector"
                        data-show-subtext="false"
                        data-live-search="true"
                      >
                        <option value="ALVA">Aluva</option>
                        <option value="PNCU">Pulinchudu</option>
                        <option value="CPPY">CompanyPady</option>
                        <option value="ATTK">Ambattukavu</option>
                        <option value="MUTT">Muttom</option>
                        <option value="KLMT">Kalamassery</option>
                        <option value="CCUV">Cusat</option>
                        <option value="PDPM">Pathadipalam</option>
                        <option value="EDAP">Edapally Jn.</option>
                        <option value="CGPP">Changampuzha Park</option>
                        <option value="PARV">Palarivattom</option>
                        <option value="JLSD">JLN Stadium</option>
                        <option value="KALR">Kaloor</option>
                        <option value="LSSE">Lissie Jn</option>
                        <option value="MGRD">MG Road</option>
                        <option value="MACE">Maharaja College</option>
                        <option value="">undefined</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second part */}
          <div className="col ">
            <div className="bg-white d-flex justify-content-center align-items-center my-5 ">
              <div className="border-1 shadow px-4 py-4 calender-btn fw-bold text-btn-bg">
                29 JUlY 2023
              </div>
            </div>
          </div>
          <div className="col me-3">
            <div className="bg-white d-flex justify-content-center align-items-center my-5 ">
              <div className="border-1 shadow px-4 py-4 calender-btn fw-bold text-btn-bg">
                2 Traveller
              </div>
            </div>
          </div>
        </div>

        {/* /second section start */}
        <div className="row">
          <div className="col-8">
            <div
              className="bg-white shadow  mx-3 border-1"
              style={{ borderRadius: "60px" }}
            >
              <div className="d-flex justify-content-between ">
                <button className="btn-one-way  px-5  text-white m-1">
                  ONE WAY
                </button>
                <button className="py-4 px-5  ">ROUND TRIP</button>
                <button className="py-4 px-5  ">MULTI CITY</button>
              </div>
            </div>
          </div>
              {/* second part */}
        <div className="col ">
          <div className="bg-white d-flex justify-content-center align-items-center my-1 ">
            <div className="border-1 shadow px-4 py-4 calender-btn fw-bold text-btn-bg">
              Frst Class
            </div>
          </div>
        </div>
        <div className="col me-3">
          <div className="bg-white d-flex justify-content-center align-items-center my-1 ">
            <div className="border-1 shadow px-4 py-4 calender-btn fw-bold text-btn-bg">
             Search
            </div>
          </div>
        </div>
        </div>

    
      </div>

      <div className="result fs-5 mt-5 ms-2">Results (27)</div>
      {data.map((item, i) => (
         
            <FlightResultCard
              key={i}
              img={item.img}
              title={item.title}
              description={item.description}
              flightname={item.flightname}
              flightaction={item.flightaction}
              flighttime={item.flighttime}
              flightbom={item.flightbom}
              flightgain={item.gain}
              flightprice={item.price}
            />
        
        ))}
    </>
  );
};

export default Flight;
