import React from "react";
import "./Hero.css";
import Header from "./Header";
import heroimg from "../assets/hero_image.png";
import herobackimg from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import NumberCounter from "number-counter";
import { delay, motion } from "framer-motion";

const Hero = ({iniWidth,setiniWidth}) => {
  const [mobileMenu, setmobileMenu] = React.useState(false);

  const heroBpreset = {
    width: iniWidth <= 700 ? "100%" : "28%",
    height: iniWidth <= 700 ? "400px" : "600px",
    backgroundColor: iniWidth <= 700 ? "transparent" : "var(--orange)",
  };
  return (
    <div className=" hero-section">
      {/* /// MOBILE HEADER//// */}
      {iniWidth <= 700 && <div className="header-mobile-top"></div>}
      <div className="blur"></div>
      <div
        className="hero-a"
        style={{ width: iniWidth <= 700 ? "100%" : "68%" }}
      >
        {/* /////////// */}
        <Header
          iniWidth={iniWidth}
          setiniWidth={setiniWidth}
          mobileMenu={mobileMenu}
          setmobileMenu={setmobileMenu}
        />

        {/*  /////////// */}
        <div className="best-fitness-line">
          <div
            className="mmts"
            style={{ width: iniWidth < 700 ? "60%" : "400px" }}
          >
            <p style={{ fontSize: iniWidth < 700 ? " 0.8rem" : "1.2rem" }}>
              the best fitiness club in the town
            </p>
          </div>

          <div className="bold-text">
            <span className="stroke">shape</span> your
          </div>
          <div className="bold-text">ideal body</div>
          <p>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </p>
        </div>

        {/* /////////// */}

        <div className="stats">
          <div>
            <NumberCounter start={0} end={100} delay={4} preFix="+" />
            <p className="stt-text">EXPERT COACHES</p>
          </div>
          <div>
            <NumberCounter start={800} end={978} delay={4} preFix="+" />
            <p className="stt-text">MEMBERS JOINED</p>
          </div>
          <div>
            <NumberCounter start={0} end={50} delay={2} preFix="+" />
            <p className="stt-text"> FITNESS PROGRAMS</p>
          </div>
        </div>

        {/* //////////// */}
        <div className="row cta">
          <button className="btn getstarted ">get started</button>
          <button className="btn learnmore">learn more</button>
        </div>
      </div>
      {/* /////SIDE2//// */}

      <div className="hero-b" style={heroBpreset}>
        <button className="btn join-now">join now</button>
        <img
          src={heroimg}
          className="heroimg"
          alt=""
          style={{ position: iniWidth < 700 ? "relative" : "absolute" }}
        />

        <motion.img
          src={herobackimg}
          className="herobackimg"
          alt=""
          style={{
            position: iniWidth < 700 ? "relative" : "absolute",
            display: iniWidth < 700 ? "none" : "block",
          }}
          animate={{ x: [0, 40, 0] }}
          delay={5}
          transition={{ type: "tween", duration: 5 }}
        />
        {/* //// HEART RATE  BOX//// */}
        <motion.div
          animate={{ x: [0, -60, 0] }}
          delay={5}
          transition={{ type: "tween", duration: 5 }}
          className="col heart-rate"
        >
          <img src={heart} alt="" className="heart" />
          <p>heart rate</p>
          <p>116 bpm</p>
        </motion.div>
        {/* //// CALORIES BOX /// */}

        <motion.div
          className=" row calories"
          animate={{ x: [0, -30, 0] }}
          delay={5}
          /* initial={{ x: -60 }} */
          transition={{ type: "tween", duration: 5 }}
        >
          <div>
            <img src={calories} alt="" className="calories-img" />
          </div>
          <div className="col calories-txt">
            <p>Calories burned</p>
            <p>220 kcal</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
