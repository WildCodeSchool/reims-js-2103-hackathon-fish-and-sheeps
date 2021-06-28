import React from "react";
import { useHistory } from "react-router-dom";
import "./Css/Btn.css";

function ButtonWeb() {
  const history = useHistory();
  function handleClick() {
    history.push("/webdesigner");
  }
  return (
    <button type="button" className="btnWeb" onClick={handleClick}></button>
  );
}

export default ButtonWeb;
