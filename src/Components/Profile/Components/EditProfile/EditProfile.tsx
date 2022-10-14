import React from "react";
import ModalBackdrop from "../../../Elements/Modals/ModalBackdrop";
import Header from "./Components/Header";
import ProfileView from "../ProfileView";
import {
  ProfileInformation,
  ImagesContainer,
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
        <Header handleDispEditProfile={handleDispEditProfile}></Header>
        <ProfileView Editable={true}></ProfileView>
      </EditProfileForm>
    </ModalBackdrop>
  );
}

export default EditProfile;
