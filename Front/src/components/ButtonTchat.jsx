import React from "react";
import { useHistory } from "react-router-dom";
import "./Css/Btn.css";

function ButtonTchat() {
  const history = useHistory();
  function handleClick() {
    history.push("/chat");
  }
  return (
    <button type="button" className="btnTchat" onClick={handleClick}></button>
  );
}

export default ButtonTchat;
