import React from "react";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <FollowBar />
        <div className="search">hhhh</div>
      </div>
    </>
  );
}

export default Home;
