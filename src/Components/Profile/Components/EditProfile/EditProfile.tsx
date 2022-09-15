import React from "react";
import ModalBackdrop from "../../../Elements/Modals/ModalBackdrop";
import Img from "../../../Elements/Img";
import close from "../../../../assets/Icons/close.svg";
import ProfileView from "../ProfileView";
import {
  ProfileInformation,
  ImagesContainer,
  SaveButton,
  FormHeading,
  HeaderItems,
  Header,
  EditProfileForm,
} from "./EditProfileCss";
function EditProfile({
  EditProfileState,
  handleDispEditProfile,
}: {
  EditProfileState: boolean;
  handleDispEditProfile: (state: boolean) => void;
}) {
  return (
    <ModalBackdrop opacity={1} display={EditProfileState ? "flex" : "none"}>
      <EditProfileForm>
        <Header>
          <HeaderItems>
            <Img
              onClick={() => {
                handleDispEditProfile(false);
              }}
              src={close}
            ></Img>
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
