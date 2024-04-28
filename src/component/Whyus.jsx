import React from "react";
import "./Whyus.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";
import Nb from "../assets/nb.png";
import nike from "../assets/nike.png";
import addidas from "../assets/adidas.png";

const Whyus = ({ iniWidth, setiniWidth }) => {
  return (
    <section className=" row whyus">
      {iniWidth >= 700 && (
        <div
          className="col whyus-a"
          /* style={{ width: iniWidth >= 800 ? "60%" : "100%" }} */
        >
          {iniWidth < 1000 && (<div className="row why-gal">
            <div className="col why-gal-a">
              <img src={image1} alt="" />
            </div>
            <div className="col why-gal-b">
              <div className="row why-gal-top">
                <img className="why-gal-img1" src={image2} alt="" />
              </div>
              <div className=" why-gal-bottom">
                <img src={image3} alt="" />
5
                <img src={image4} alt="" />
              </div>
            </div>
          </div>)}
          { iniWidth >= 1000 && <div className="col why-gal-alt">
              <img src={image1} alt=""  width="100%"/>
              <img src={image2} alt="" width="100%" />
              <img src={image3} alt="" width="100%"/>
              <img src={image4} alt=""  width="100%"/>
            </div>}

        </div>
      )}
      <div
        className="col whyus-b"
        /*  style={{ width: iniWidth >= 800 ? "38%" : "100%" }} */
      >
        <h5 className="reason">some reasons</h5>
        <h2 className="why-title">
          <span className="stroke">why</span>choose us?
        </h2>
        <div className="whyb-txt">
          <img src={tick} alt="" className="tick" />{" "}
          <p>OVER 140+ EXPERT COACHS</p>
        </div>
        <div className="whyb-txt">
          <img src={tick} alt="" className="tick" />{" "}
          <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
        </div>
        <div className="whyb-txt">
          <img src={tick} alt="" className="tick" />{" "}
          <p>1 FREE PROGRAM FOR NEW MEMBER </p>
        </div>
        <div className="whyb-txt">
          <img src={tick} alt="" className="tick" /> RELIABLE PARTNERS
        </div>
        <h5 className="partner-title">OUR PARTNERS</h5>
        <div className=" row partner">
          <img className="partner-img" src={Nb} alt="" />
          <img className="partner-img" src={addidas} alt="" />
          <img className="partner-img" src={nike} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Whyus;
