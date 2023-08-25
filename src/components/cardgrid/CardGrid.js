import React from "react";
import "./CardGrid.css";
const CardGrid = () => {
  return (
    <>
    <div className="row mt-5">
        <div className="col">
        <div class="module darken fs-3 p-4 ">Peshawar</div>
        </div>
        <div className="col">
        <div class="module darken fs-3 p-4 ">Karachi</div>
        </div>
    </div>
    <div className="row  mt-4">
        <div className="col">
        <div class="module darken fs-3 p-4 ">Lahore</div>
        </div>
        <div className="col">
        <div class="module darken fs-3 p-4 ">Gujranwala</div>
        </div>
        <div className="col">
        <div class="module darken fs-3 p-4 ">Rawalpindi</div>
        </div>
    </div>
    </>
  );
};

export default CardGrid;
