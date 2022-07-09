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
  aspect-ratio: 1/1;
  background-color: lightgray;
  border: 0.3em solid white;
  border-radius: 50%;
`;

function ProfileImageContainer() {
  return <ProfileContainer></ProfileContainer>;
}

export default ProfileImageContainer;
