import React from "react";
import "./Footer.css";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blur-f1"></div>
      <div className="blur-f2"></div>
      <div className="row foot-top">
        <img src={github} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <div className="row foot-bt">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
