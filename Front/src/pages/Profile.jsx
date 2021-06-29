import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import VideoProfile from "../components/VideoProfile.jsx";
import CreateVideo from "./CreateVideo.jsx";
import pdpToto from "../components/assets/test.jpg";

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

const userVideos = [
  {
    id: 1,
    title: "Title video 1",
    src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
  },
  {
    id: 2,
    title: "Title video 2",
    src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
  },
  {
    id: 3,
    title: "Title video 3",
    src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
  },
  {
    id: 4,
    title: "Title video 4",
    src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
  },
  {
    id: 5,
    title: "Title video 5",
    src: null,
  },
];

function Profile() {
  const [createVideo, setCreateVideo] = React.useState(false);

  const createNewVideo = () => {
    setCreateVideo(!createVideo);
  };

  const [myVideoTitle, setMyVideoTitle] = React.useState("");

  /* Si l'état de mon state createVideo = true, alors return 
  d'un nouveau composant qui sera ma page de création de vidéo */

  if (createVideo) {
    return (
      <CreateVideo
        userVideos={userVideos}
        setMyVideoTitle={setMyVideoTitle}
        myVideoTitle={myVideoTitle}
      />
    );
  }
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
            {userVideos.map((videoToDisplay) => {
              if (videoToDisplay.src == null) {
                return (
                  <div className="title__content">
                    <p id="pay">poudre aux yeux</p>
                    <div
                      className="create__video__button"
                      role="button"
                      aria-label="Close"
                      tabIndex="-1"
                      onKeyDown={createNewVideo}
                      onClick={createNewVideo}
                      key={videoToDisplay.id}
                    >
                      <FontAwesomeIcon className="icon" icon={faPlus} />
                    </div>
                  </div>
                );
              }
              return (
                <VideoProfile
                  key={videoToDisplay.id}
                  src={videoToDisplay.src}
                  title={videoToDisplay.title}
                />
              );
            })}
          </UserContent>
        </div>
      </div>
    </>
  );
}

export default Profile;
