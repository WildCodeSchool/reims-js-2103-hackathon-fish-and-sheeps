import React from "react";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import Diapo from "../components/Diapo.jsx";
import Diapo2 from "../components/Diapo2.jsx";
import AddContext from "../contexts/AddContext.jsx";
import "./Home.css";

function Home() {
  const [search, setSearch] = React.useState(false);
  const { setPlay } = React.useContext(AddContext);

  return (
    <>
      <NavBar />
      <div className="container">
        <FollowBar />
        <div className="search">
          <div className="imput">
            <input className="imputS" type="search" id="search" name="search" />
            <button className="btnS" onClick={() => setSearch(!search)}>
              Search
            </button>
          </div>
          {search === false && (
            <>
              <h1 className="h1">Top 4 Freelancers of the month</h1>
              <Diapo />
            </>
          )}
          {search === true && (
            <>
              <h1 className="h1">Our Best WebDesigner</h1>
              <Diapo2 />
              <div className="place">
                <button className="btnAdd" onClick={() => setPlay(true)}>
                  Add Chat
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
