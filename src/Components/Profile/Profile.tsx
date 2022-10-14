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

function Profile() {
  let [dispEditProfile, setDispEditProfile] = useState(false);
  function handleDispEditProfile(state: boolean) {
    setDispEditProfile(state);
  }
  return (
    <ProfileContainer>
      <ProfileView
        Editable={false}
        handleDispEditProfile={handleDispEditProfile}
      ></ProfileView>
      <ProfileInformation></ProfileInformation>
      <EditProfile
        handleDispEditProfile={handleDispEditProfile}
        EditProfileState={dispEditProfile}
      ></EditProfile>
    </ProfileContainer>
  );
}

export default Profile;
