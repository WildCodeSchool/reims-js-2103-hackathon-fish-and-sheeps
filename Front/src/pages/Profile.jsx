import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import VideoProfile from "../components/VideoProfile.jsx";
import pdpToto from "../components/assets/test.jpg";

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

function Profile() {
  const userVideos = [
    {
      id: 1,
      title: "useState",
      src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
    },
    {
      id: 2,
      title: "videoTitle",
      src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
    },
    {
      id: 3,
      title: "videoTitle",
      src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
    },
    {
      id: 4,
      title: "videoTitle",
      src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
    },
    {
      id: 5,
      title: "videoTitle",
      src: null,
    },
  ];

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
                return <button>plus</button>;
              }
              return (
                <VideoProfile
                  key={videoToDisplay.id}
                  src={videoToDisplay.src}
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
