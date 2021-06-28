import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "./assets/logo.png";
import "./Css/NavBar.css";

function NavBar() {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="" onClick={handleClick} />
    </div>
  );
}

export default NavBar;
