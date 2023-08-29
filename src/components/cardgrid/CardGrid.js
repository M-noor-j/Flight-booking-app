import React from "react";
import "./CardGrid.css";
const CardGrid = ({titleone,titletwo,titlethree,titlefour,titlefive}) => {
  return (
    <>
    <div className="row mt-5">
        <div className="col">
        <div class="module darken fs-3 p-4">{titleone}</div>
        </div>
        <div className="col">
        <div class="module darken fs-3 p-4">{titletwo}</div>
        </div>
    </div>
    <div className="row  mt-4">
        <div className="col">
        <div class="module darken fs-3 p-4">{titlethree}</div>
        </div>
        <div className="col">
        <div class="module darken fs-3 p-4">{titlefour}</div>
        </div>
        <div className="col">
        <div class="module darken fs-3 p-4">{titlefive}</div>
        </div>
    </div>
    </>
  );
};

export default CardGrid;
