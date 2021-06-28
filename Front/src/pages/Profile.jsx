import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";

import "./Profile.css";

const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
`;

function Profile() {
  return (
    <>
      <NavBar />
      <div className="container">
        <FollowBar />
        <div className="search">
          <ProfileHeader>
            <img id="pdp" src="" alt="profile picture" />
          </ProfileHeader>
        </div>
      </div>
    </>
  );
}

export default Profile;
