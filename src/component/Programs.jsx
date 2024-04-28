import React from "react";
import "./programs.css";
import { programsData } from "../data/programsData";
import Program from "./nexted-component/program";

const myData = programsData.map((data) => (
  <Program
    details={data.details}
    key={data.heading}
    heading={data.heading}
    image={data.image}
  />
));

const Programs = () => {
  return (
    <div className="col our-program">
      <div className="row program-header">
        <p className="stroke">explore our</p>
        <p>programs</p>
        <p className="stroke">to shape you</p>
      </div>

      <div className="row program-body"> {myData} </div>
    </div>
  );
};

export default Programs;
