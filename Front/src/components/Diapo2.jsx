import React from "react";
import { Carousel } from "3d-react-carousal";
import { useHistory } from "react-router-dom";
import A from "./assets/A.jpg";
import G from "./assets/G.jpg";
import F from "./assets/F.jpg";
import "./Css/Diapo.scss";

function Diapo2() {
  const history = useHistory();
  function handleClick() {
    history.push("/webdesigner");
  }
  const slides = [
    <img
      key="1"
      className="circular-images"
      src={A}
      onClick={handleClick}
      alt="1"
    />,
    <img key="2" className="circular-images" src={G} alt="2" />,
    <img key="3" className="circular-images" src={F} alt="3" />,
  ];

  return <Carousel className="carousel" slides={slides} />;
}

export default Diapo2;
