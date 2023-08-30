import React from "react";
import insurance from "./images/shield_person.png";
import attractions from "./images/attractions.png";
import bed from "./images/bed.png";
import car from "./images/car_rental.png";
import flight from "./images/airplanemode_active.png";
import close from "./images/cancel.png";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="container">
      <div className="options">
        <div className="xbtn">
          <Link to="/home">
            <img src={close} alt="icon" />
          </Link>
        </div>

        <div className="items">
          <Link to="/processing">
            <div className="item">
              <img src={insurance} alt="icon" />
              <h2>Travel insurance</h2>
            </div>
          </Link>
          <Link to="/processing">
            <div className="item">
              <img src={bed} alt="icon" />
              <h2>Hotel</h2>
            </div>
          </Link>
          <Link to="/processing">
            <div className="item">
              <img src={attractions} alt="icon" />
              <h2>Attractions</h2>
            </div>
          </Link>
          <Link to="/processing">
            <div className="item">
              <img src={flight} alt="icon" />
              <h2>Flights</h2>
            </div>
          </Link>
          <Link to="/processing">
            <div className="item">
              <img src={car} alt="icon" />
              <h2>Car Rental</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Options;
