import React from "react";
import ModalBackdrop from "../Elements/Modals/ModalBackdrop";
import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
import { Image } from "../AuthenticationPageCss";
import close from "../../assets/Icons/close.svg";
import ProfileView from "./ProfileView";
let EditProfileForm = styled.div`
  width: 100%;
  background: white;
  height: 100%;
  border-radius: 0.7em;
  overflow-y: auto;
  padding: 0.4em 1em;

  @media ${devices.tablet} {
    max-width: 585px;
    height: 90%;
  }
`;

let Header = styled.div`
  padding: 0.2em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
let HeaderItems = styled.div`
  gap: 1.7em;
  display: flex;
`;
const FormHeading = styled.h2`
  font-size: clamp(1.2rem, 1.1571rem + 0.2143vw, 1.5rem);
`;
const SaveButton = styled.button`
  font-family: "Montserrat";
  padding: 0.5em 1.2em;
  border-radius: 2.5em;
  border: transparent;
  background-color: black;
  color: white;
  font-weight: 800;
  cursor: pointer;
`;
const ProfileInformation = styled.div``;
const ImagesContainer = styled.div``;

function EditProfile({ EditProfileState }: { EditProfileState: boolean }) {
  return (
    <ModalBackdrop opacity={1} display="flex">
      <EditProfileForm>
        <Header>
          <HeaderItems>
            <Image src={close}></Image>
            <FormHeading>Edit Profile</FormHeading>
          </HeaderItems>
          <HeaderItems>
            <SaveButton>Save</SaveButton>
          </HeaderItems>
        </Header>
        <ImagesContainer>
          <ProfileView></ProfileView>
        </ImagesContainer>
      </EditProfileForm>
    </ModalBackdrop>
  );
}

export default EditProfile;
