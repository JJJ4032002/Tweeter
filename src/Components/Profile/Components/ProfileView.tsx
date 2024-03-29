import React from "react";
import styled from "styled-components/macro";
import BannerImageContainer from "../../Elements/BannerImageContainer";
import ProfileImageContainer from "../../Elements/ProfileImageContainer";
import Button from "../../Elements/Button";
import { devices } from "../../../Media Queries/Queries";
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
const PlaceHolder = styled.div`
  padding: 1.5em 1.5em;
`;
function ProfileView({
  handleDispEditProfile,
  Editable,
}: {
  handleDispEditProfile?: (state: boolean) => void;
  Editable: boolean;
}) {
  return (
    <>
      <Grid>
        <BannerImageContainer Editable={Editable}></BannerImageContainer>
        <ProfileImageContainer Editable={Editable}></ProfileImageContainer>
        <EditButtonContainer>
          {handleDispEditProfile === undefined ? (
            <PlaceHolder></PlaceHolder>
          ) : (
            <Button
              onClick={() => {
                handleDispEditProfile(true);
              }}
              className="Edit"
            >
              Edit profile
            </Button>
          )}
        </EditButtonContainer>
      </Grid>
    </>
  );
}

export default ProfileView;
