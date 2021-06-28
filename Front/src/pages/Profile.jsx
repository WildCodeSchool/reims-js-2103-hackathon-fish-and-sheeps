import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import VideoProfile from "../components/VideoProfile.jsx";

import "./Profile.css";

const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  max-width: 75vw;
`;

function Profile() {
  const userVideos = [
    {
      id: 1,
      src: "here",
    },
    {
      id: 2,
      src: "here",
    },
    {
      id: 3,
      src: "here",
    },
    {
      id: 4,
      src: "here",
    },
    {
      id: 5,
      src: "here",
    },
    {
      id: 6,
      src: "here",
    },
    {
      id: 7,
      src: "here",
    },
    {
      id: 8,
      src: "here",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="container">
        <FollowBar />
        <div className="search">
          <ProfileHeader>
            <img id="pdp" src="" alt="profile picture" />
          </ProfileHeader>
          <UserContent>
            {userVideos.map((videoToDisplay) => (
              <VideoProfile
                key={videoToDisplay.id}
                title={videoToDisplay.src}
              />
            ))}
          </UserContent>
        </div>
      </div>
    </>
  );
}

export default Profile;
