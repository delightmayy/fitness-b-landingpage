import React from "react";
import "./journey.css";
import { plansData } from "../data/plansData";
import Journeybox from '../component/nexted-component/Journeybox'

const dataplan = plansData.map((x)=> <Journeybox icon={x.icon} key={x.name} Name={x.name} price ={x.price} features={x.features} /> )

const Journey = () => {
  return (
    <section className="row journey">
      <div className="col journey-cont">
        <div className="row journey-title stroke">
          READY TO START
          <span className="stroke-off">YOUR JOURNEY </span> NOW WITHUS
        </div>
        <div className="row journey-body">
        {dataplan}
        </div>
      </div>
    </section>
  );
};

export default Journey;
