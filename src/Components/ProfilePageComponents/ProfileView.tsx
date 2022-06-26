import React from "react";
import styled from "styled-components/macro";
import BannerImageContainer from "../Elements/BannerImageContainer";
import ProfileImageContainer from "../Elements/ProfileImageContainer";
import { Buttons } from "../AuthenticationPageCss";
import { devices } from "../../Media Queries/Queries";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.35fr 0.65fr;
  grid-template-rows: 0.7fr 0.2fr 0.1fr;
  grid-template-areas:
    "BannerImage"
    "BannerImage"
    "EditButton";
  @media ${devices.mobileS} {
    grid-template-columns: 0.37fr 0.63fr;
    grid-template-rows: 0.5fr 0.3fr 0.2fr;
  }
  @media ${devices.mobileM} {
    grid-template-columns: 0.35fr 0.65fr;
    grid-template-rows: 0.5fr 0.3fr 0.2fr;
  }
  @media ${devices.mobileL} {
    grid-template-columns: 0.35fr 0.65fr;
    grid-template-rows: 0.5fr 0.3fr 0.2fr;
  }
`;
const EditButtonContainer = styled.div`
  grid-area: EditButton;
  grid-column: 1/3;
  display: flex;
  justify-content: flex-end;
  padding: 0em 1em;
  align-items: flex-start;
`;
function ProfileView() {
  return (
    <>
      <Grid>
        <BannerImageContainer></BannerImageContainer>
        <ProfileImageContainer></ProfileImageContainer>
        <EditButtonContainer>
          <Buttons className="Edit">Edit profile</Buttons>
        </EditButtonContainer>
      </Grid>
    </>
  );
}

export default ProfileView;
