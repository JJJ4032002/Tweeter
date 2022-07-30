import React from "react";
import styled from "styled-components/macro";
import BannerImageContainer from "../Elements/BannerImageContainer";
import ProfileImageContainer from "../Elements/ProfileImageContainer";
import { Buttons } from "../AuthenticationPageCss";
import { devices } from "../../Media Queries/Queries";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.7fr 0.2fr 0.1fr;
  width: 100%;
  grid-template-areas:
    "BannerImage"
    "BannerImage"
    "EditButton";
  @media ${devices.mobileS} {
    grid-template-columns: 0.45fr 0.55fr;
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
function ProfileView({
  handleDispEditProfile,
}: {
  handleDispEditProfile: (state: boolean) => void;
}) {
  return (
    <>
      <Grid>
        <BannerImageContainer></BannerImageContainer>
        <ProfileImageContainer></ProfileImageContainer>
        <EditButtonContainer>
          <Buttons
            onClick={() => {
              handleDispEditProfile(true);
            }}
            className="Edit"
          >
            Edit profile
          </Buttons>
        </EditButtonContainer>
      </Grid>
    </>
  );
}

export default ProfileView;
