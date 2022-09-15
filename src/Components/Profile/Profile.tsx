import React, { useState } from "react";
import styled from "styled-components/macro";
import ProfileView from "./Components/ProfileView";
import ProfileInformation from "./Components/ProfileInformation";
import EditProfile from "./Components/EditProfile/EditProfile";
const ProfileContainer = styled.div`
  grid-area: MainContent;
  border-left: 1px solid #cfd9de;
  border-top: 1px solid #cfd9de;
`;

function Profile({
  handleDispEditProfile,
}: {
  handleDispEditProfile: (state: boolean) => void;
}) {
  return (
    <ProfileContainer>
      <ProfileView handleDispEditProfile={handleDispEditProfile}></ProfileView>
      <ProfileInformation></ProfileInformation>
    </ProfileContainer>
  );
}

export default Profile;
