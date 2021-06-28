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
`;

const UserContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
`;

function Profile() {
  const userVideos = [
    {
      id: 1,
      url: "here",
    },
    {
      id: 2,
      url: "here",
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
                title={videoToDisplay.url}
              />
            ))}
          </UserContent>
        </div>
      </div>
    </>
  );
}

export default Profile;
