import React, { useState } from "react";
import styled from "styled-components/macro";
import ProfileView from "./ProfilePageComponents/ProfileView";
import ProfileInformation from "./ProfilePageComponents/ProfileInformation";
import EditProfile from "./ProfilePageComponents/EditProfile";
const ProfileContainer = styled.div`
  grid-area: MiddleSection;
  border-left: 1px solid #cfd9de;
  border-top: 1px solid #cfd9de;
`;

function ProfilePage() {
  let [dispEditProfile, setDispEditProfile] = useState(false);
  function handleDispEditProfile(state: boolean) {
    setDispEditProfile(state);
  }
  return (
    <ProfileContainer>
      <ProfileView handleDispEditProfile={handleDispEditProfile}></ProfileView>
      <ProfileInformation></ProfileInformation>
      <EditProfile EditProfileState={dispEditProfile}></EditProfile>
    </ProfileContainer>
  );
}

export default ProfilePage;
