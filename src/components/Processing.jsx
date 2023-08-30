import React from "react";
import { Link } from "react-router-dom";

const Processing = () => {
  return (
    <div className=" container">
      <div className="process-con">
        <h1>We have begun creating your well-rounded itinerary</h1>
        <div className="process-btns">
          <Link to="/itinerary">
            <button>Preview Itinerary</button>
          </Link>
          <Link to="/options">
            <button>Continue Planning</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Processing;
