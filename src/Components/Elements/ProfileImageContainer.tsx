import React from "react";
import styled from "styled-components/macro";
const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-row: 2/4;
  grid-column: 1/2;
  margin-left: 1em;
  align-self: center;
  height: 100%;
`;
const ImageDiv = styled.div`
  width: 60%;
  height: 60%;
  border: 5px solid white;
  background-color: lightgray;
  box-shadow: 0 0 0 10vmax red;
  clip-path: circle(71%);
`;
function ProfileImageContainer() {
  return (
    <ProfileContainer>
      <ImageDiv></ImageDiv>
    </ProfileContainer>
  );
}

export default ProfileImageContainer;
