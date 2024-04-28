import React from "react";
import arrow from "../../assets/rightArrow.png";

const Program = ({ heading, details, image }) => {
  return (
    <div className=" col program">
      <div>{image}</div>
      <h5 className="program-title">{heading}</h5>
      <p className="program-txt">{details}</p>
      <button className="btn program-btn">
        join now
        <span>
          <img className="btnimg" src={arrow} alt="" />
        </span>
      </button>
    </div>
  );
};

export default Program;
