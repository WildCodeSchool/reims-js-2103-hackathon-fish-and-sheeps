import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import VideoProfile from "../components/VideoProfile.jsx";
import pdpToto from "../components/assets/test.jpg";
import AddContext from "../contexts/AddContext.jsx";

import "./Profile.css";
import "../components/Css/VideoProfile.css";

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;
  margin: auto;
`;

const UserContent = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 4rem;
  max-width: 78vw;
`;

function Profile() {
  const { userVideos } = React.useContext(AddContext);

  /* Si l'état de mon state createVideo = true, alors return 
  d'un nouveau composant qui sera ma page de création de vidéo */

  return (
    <>
      <NavBar />
      <div className="container">
        <FollowBar />
        <div className="search">
          <ProfileHeader>
            <img id="pdp" src={pdpToto} alt="profile picture" />
            <p id="user__bio">Web dev with React js</p>
          </ProfileHeader>
          <UserContent>
            {userVideos.map((videoToDisplay) => (
              <VideoProfile
                key={videoToDisplay.id}
                src={videoToDisplay.src}
                title={videoToDisplay.title}
              />
            ))}
            <div className="title__content">
              <p id="pay">poudre aux yeux</p>
              <Link className="create__video__button" to="/create">
                <FontAwesomeIcon className="icon" icon={faPlus} />
              </Link>
            </div>
          </UserContent>
        </div>
      </div>
    </>
  );
}

export default Profile;
