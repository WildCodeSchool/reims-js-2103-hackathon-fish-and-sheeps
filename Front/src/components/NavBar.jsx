import React from "react";
import Logo from "./assets/logo.png";
import "./Css/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="" />
    </div>
  );
}

export default NavBar;
