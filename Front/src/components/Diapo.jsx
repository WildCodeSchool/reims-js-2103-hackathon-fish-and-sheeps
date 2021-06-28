import React from "react";
import { Carousel } from "3d-react-carousal";
import { useHistory } from "react-router-dom";
import Toto from "./assets/A.jpg";
import Brian from "./assets/B.jpg";
import Pascal from "./assets/C.jpg";
import Hugue from "./assets/E.jpg";
import "./Css/Diapo.scss";

function Diapo() {
  const history = useHistory();
  function handleClick() {
    history.push("/screen");
  }
  const slides = [
    <img
      key="1"
      className="circular-images"
      src={Toto}
      onClick={handleClick}
      alt="1"
    />,
    <img key="2" className="circular-images" src={Brian} alt="2" />,
    <img key="3" className="circular-images" src={Pascal} alt="3" />,
    <img key="4" className="circular-images" src={Hugue} alt="4" />,
  ];

  return <Carousel className="carousel" slides={slides} />;
}

export default Diapo;
