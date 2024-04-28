import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import menuIcon from "../assets/bars.png";
const Header = ({ iniWidth, setiniWidth, mobileMenu, setmobileMenu }) => {
  const handlemobileMenu = () => {
    setmobileMenu((prevstate) => !prevstate);
   
  };

  // GETTING INNERWIDTH OF DEVICE EVEN WHEN RESIZED
 React.useEffect(()=>{ const Handlewidth = () => {
    setiniWidth(window.innerWidth);
  };
  window.addEventListener("resize", Handlewidth);},[])
 
  // MAKING MOBILE HEADER

  return (
    <div className="header">
      <div>
        <img className="header-logo" alt="logo" src={logo} />
      </div>

      <div>
        {iniWidth >= 700 && (
          <ul className="header-menu">
            <li>home</li>
            <li>programs</li>
            <li>why us</li>
            <li>plans</li>
            <li>testimonies</li>
          </ul>
        )}

        {/* HEADER MENU FOR MOBILE */}
        {iniWidth < 700 && (
          <img
            src={menuIcon}
            alt=""
            className="menu-icon"
            onClick={handlemobileMenu}
            onDoubleClick ={handlemobileMenu}
          />
        )}
        {mobileMenu && (
          <ul className="header-menu-b">
            <li>home</li>
            <li>programs</li>
            <li>why us</li>
            <li>plans</li>
            <li>testimonies</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
