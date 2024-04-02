import React, { useState } from "react";

import logolight from "../../assets/logo-black.png";
import logodark from "../../assets/logo-white.png";
import toggle_dark from "../../assets/day.png";
import toggle_light from "../../assets/night.png";
import "./Header.css";
import AddStockModel from "../Model/AddStockModel";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const toggle_mode = () => {
    props.themeMode === "light"
      ? props.setThemeMode("dark")
      : props.setThemeMode("light");
  };
  
  return (
    <div className={`navbar-head ${props.themeMode}-head`}>
      <img src={props.themeMode==="light"?logolight:logodark} alt="Logo" className="logo" />
      <ul className= {`${props.themeMode}`}>
        <li> <Link to="/">TRADE</Link></li>
        <li><Link to="/order">ORDERS</Link></li>
      </ul>
      <button type="button" className="btn-main"  onClick={handleShow}>
        Add stock
      </button>
      <AddStockModel show={show} setShow={setShow} handleShow={handleShow}></AddStockModel>
      <img src={props.themeMode==="light"?toggle_light:toggle_dark} alt="" className="toggle-icon" onClick={()=>toggle_mode()}/>
    </div>
  );
};

export default Header;
