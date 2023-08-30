import React from "react";

import itinerary from "./images/Itinerary creation 1.png";
import { Link } from "react-router-dom";

const Itinerary = () => {
  return (
    <div className="ite-con">
      <img src={itinerary} alt="icon" />
      <Link to="/options">
        <button className="ite-btn">Continue Planning</button>
      </Link>
    </div>
  );
};

export default Itinerary;
