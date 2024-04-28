import React from "react";

import arrow from "../../assets/rightArrow.png";

const Journeybox = ({ icon, Name, price, features }) => {
  return (
    <div className="col journeybox">
       <span>{icon}</span>
      <p className="col journeybox-title">{Name}</p>
      <h1 className="journeybox-main">${price}</h1>
      <div className="col journeybox-text">
        <h4 className="journeybox-txt">{features[0]}</h4>
        <h4 className="journeybox-txt large ">{features[1]}</h4>
        <h4 className="journeybox-txt">{features[2]}</h4>
      </div>
      <p className="journeybox-small">
        See more benefits <img className="arrow" src={arrow} alt="" />{" "}
      </p>
      <button className="btn">join now</button>
    </div>
  );
};

export default Journeybox;
