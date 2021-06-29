import React from "react";
import TChat from "../components/TChat.jsx";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import "./Screen.css";

function Screen() {
  return (
    <>
      <NavBar />
      <div className="container">
        <FollowBar />
        <div className="search">
          <TChat className="tchat" />
        </div>
      </div>
    </>
  );
}

export default Screen;
