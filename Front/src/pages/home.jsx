import React from "react";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import Diapo from "../components/Diapo.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <FollowBar />
        <div className="search">
          <input
            type="search"
            id="search"
            name="search"
            value=""
            placeholder="WebDesigner"
          />
          <Diapo />
        </div>
      </div>
    </>
  );
}

export default Home;
