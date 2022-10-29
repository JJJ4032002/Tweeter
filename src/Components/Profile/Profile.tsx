import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import ProfileView from "./Components/ProfileView";
import ProfileInformation from "./Components/ProfileInformation";
import EditProfile from "./Components/EditProfile/EditProfile";
import { HomeHeading, ItemDiv } from "../Home/HomeCss";
import { UserContext } from "../../Contexts/UserContext";
const ProfileContainer = styled.div`
  grid-area: MainContent;
  border-left: 1px solid #cfd9de;
  border-right: 1px solid #cfd9de;
`;

function Profile() {
  let { user } = useContext(UserContext);
  let [dispEditProfile, setDispEditProfile] = useState(false);
  function handleDispEditProfile(state: boolean) {
    setDispEditProfile(state);
  }
  return (
    <ProfileContainer>
      <ItemDiv className="HeadingDiv">
        <HomeHeading className="RightSectionMobileL">
          {user != null ? user.name : "UserName"}
        </HomeHeading>
      </ItemDiv>
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
