import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import VideoProfile from "../components/VideoProfile.jsx";
import AddContext from "../contexts/AddContext.jsx";
import A from "../components/assets/A.jpg";

import "./Profile.css";

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

function ProfileWeb() {
  const { setFollow } = React.useContext(AddContext);
  const userVideos = [
    {
      id: 1,
      title: "useState",
      src: "https://www.youtube.com/watch?v=w6y_OhhOc_M&ab_channel=Team8Tuto",
    },
    {
      id: 2,
      title: "videoTitle",
      src: "https://www.youtube.com/watch?v=5r-_fy39yPU&ab_channel=Team8Tuto",
    },
    {
      id: 3,
      title: "videoTitle",
      src: "https://www.youtube.com/watch?v=QSsrrE19VOI&ab_channel=Team8Tuto",
    },
    {
      id: 4,
      title: "videoTitle",
      src: "https://www.youtube.com/watch?v=dB-6a0DvWn8&ab_channel=Team8Tuto",
    },
    {
      id: 5,
      title: "videoTitle",
      src: "https://www.youtube.com/watch?v=VfnBrgsLPnI&ab_channel=Team8Tuto",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="container">
        <FollowBar />
        <div className="search">
          <ProfileHeader>
            <img id="pdp" src={A} alt="profile picture" />
            <p id="user__bio">Kevin WebDesign</p>
            <button className="btnFollow" onClick={() => setFollow(true)}>
              Follow
            </button>
          </ProfileHeader>
          <UserContent>
            {userVideos.map((videoToDisplay) => (
              <VideoProfile key={videoToDisplay.id} src={videoToDisplay.src} />
            ))}
          </UserContent>
        </div>
      </div>
    </>
  );
}

export default ProfileWeb;
