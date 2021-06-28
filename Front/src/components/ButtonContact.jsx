import React from "react";
import { useHistory } from "react-router-dom";
import "./Css/Btn.css";

function ButtonContact() {
  const history = useHistory();
  function handleClick() {
    history.push("/screen");
  }
  return (
    <button type="button" className="btnContact" onClick={handleClick}></button>
  );
}

export default ButtonContact;
