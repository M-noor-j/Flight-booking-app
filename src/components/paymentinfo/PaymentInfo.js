import React from "react";
import "./PaymentInfo.css";
const PaymentInfo = () => {
  const data = [
    {
      paymnet: "$319.65",
      description: "pay with paypal",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
    },
    {
      paymnet: "$319.65",
      description: "pay with paypal",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png",
    },
    {
      paymnet: "$319.65",
      description: "pay with paypal",
      img: "https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png",
    },
  ];
  return (
    <>
      <div className="row mt-5">
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
          <div className="d-flex justify-content-center align-items-center my-5 ">
            <div className="border-1 shadow px-4 py-4 calender-btn fw-bold text-btn-bg bg-white">
              29 JUlY 2023
            </div>
          </div>
        </div>
        <div className="col me-3">
          <div className="d-flex justify-content-center align-items-center my-5 ">
            <div className="border-1 shadow px-4 py-4 calender-btn fw-bold text-btn-bg bg-white">
              2 Traveller
            </div>
          </div>
        </div>
      </div>
      <div className="payment-heading fs-5 fw-bold ">Payment Methods</div>

      {/* do not disturb */}
      {/* Section start payment method */}

      <div className="bg-white py-5 px-4 mt-5  shadow container-bg">
        {/* first two column enter card */}
        <div className="d-flex justify-content-between">
          <div>
            <div className="heading-pay ms-2 ">Card number</div>
            <input
              type=" text   "
              className="border-1 bg-light  input-class py-2 ps-4 mt-2 shadow "
              placeholder="***** ***** *******"
            />
          </div>
          <div>
            <div className="heading-pay ms-2 ">Security Number</div>
            <input
              type=" text    "
              className="border-1 bg-light  input-class py-2 ps-4 mt-2 shadow"
              placeholder="***** ***** *******"
            />
          </div>
        </div>
        {/* second two column enter card */}
        <div className="d-flex justify-content-between mt-4">
          <div>
            <div className="heading-pay ms-2 ">Expire Date</div>
            <input
              type=" text   "
              className="border-1 bg-light  input-class py-2 ps-4 mt-2 shadow"
              placeholder="***** ***** *******"
            />
          </div>
          <div>
            <div className="heading-pay ms-2 ">Billing Address</div>
            <input
              type=" text    "
              className="border-1 bg-light  input-class py-2 ps-4 mt-2 shadow"
              placeholder="***** ***** *******"
            />
          </div>
        </div>

        {/* ////strap card start */}

        {data.map((item, index) => (
          <div
            className="bg-light py-3 strap border-1 shadow mt-5 px-4"
            key={index}
          >
            <div className="row ">
              <div className="col">
                <div className="d-flex align-items-center">
                  <img
                    src="https://www.freepnglogos.com/uploads/dot-png/dot-background-image-design-joy-studio-design-gallery-best-28.png"
                    alt=""
                    style={{ width: "15px", height: "15px" }}
                  />
                  <div className="div fw-bold fs-5 ms-4">
                    {item.paymnet}-Paypal
                  </div>
                </div>
                <div className="" style={{ marginLeft: "2.5rem" }}>
                  {item.description}
                </div>
              </div>
              <div className="col ">
                <div className="d-flex justify-content-end align-items-center mt-2">
                  <img
                    src={item.img}
                    alt=""
                    className=""
                    style={{ width: "8rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* //   total  */}
        <div className="d-flex justify-content-around fs-3 fw-bold mt-5">
          <div className="total-heading"> TOTAL :</div>
          <div className="total-amount">$319.24</div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-proceed fs-5 px-4 py-2 shadow ">
            {" "}
            Proceed to payment{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
