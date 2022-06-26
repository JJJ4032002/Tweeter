import React from "react";
import styled from "styled-components/macro";
import ProfileView from "./ProfilePageComponents/ProfileView";
import ProfileInformation from "./ProfilePageComponents/ProfileInformation";
const ProfileContainer = styled.div`
  grid-area: MiddleSection;
  border-left: 1px solid #cfd9de;
  border-top: 1px solid #cfd9de;
`;

function ProfilePage() {
  return (
    <ProfileContainer>
      <ProfileView></ProfileView>
      <ProfileInformation></ProfileInformation>
    </ProfileContainer>
  );
}

export default ProfilePage;
