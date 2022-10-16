import React, { useState } from "react";
import ModalBackdrop from "../../../Elements/Modals/ModalBackdrop";
import Header from "./Components/Header";
import ProfileView from "../ProfileView";
import { ProfileInformation, EditProfileForm } from "./EditProfileCss";
import { getOrientation } from "get-orientation/browser";
import { getRotatedImage } from "../../../Elements/Crop/CanvasUtils";
import Crop from "../../../Elements/Crop/Crop";
const ORIENTATION_TO_ANGLE = {
  "3": 180,
  "6": 90,
  "8": -90,
};

function EditProfile({
  EditProfileState,
  handleDispEditProfile,
}: {
  EditProfileState: boolean;
  handleDispEditProfile: (state: boolean) => void;
}) {
  let [BannerImage, setBannerImage] = useState<string | null>(null);
  let [ProfileImage, setProfileImage] = useState<string | null>(null);
  //helper function for BannerImage state
  function handleBannerImage(state: string | null) {
    setBannerImage(state);
  }
  //helper function for ProfileImage state
  function handleProfileImage(state: string | null) {
    setProfileImage(state);
  }
  //function to get image file
  const onBannerFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await ProcessFileUploaded(file);
      handleBannerImage(imageDataUrl);
    }
  };
  //function to get Image file
  const onProfileFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await ProcessFileUploaded(file);
      handleProfileImage(imageDataUrl);
    }
  };

  return (
    <ModalBackdrop opacity={1} display={EditProfileState ? "flex" : "none"}>
      <EditProfileForm>
        <Header handleDispEditProfile={handleDispEditProfile}></Header>
        <ProfileView
          onFileChangeBanner={onBannerFileChange}
          onFileChangeProfile={onProfileFileChange}
          Editable={true}
        ></ProfileView>
      </EditProfileForm>
      <Crop
        Image={BannerImage}
        onPrevious={handleBannerImage}
        Heading="Edit Media"
        cropShape="rect"
        fileName="Banner"
      ></Crop>
      <Crop
        Image={ProfileImage}
        onPrevious={handleProfileImage}
        Heading="Edit Profile"
        cropShape="round"
        fileName="Profile"
      ></Crop>
    </ModalBackdrop>
  );
}
//helper function to process Image file
async function ProcessFileUploaded(file: File): Promise<string> {
  let imageDataUrl = (await readFile(file)) as string;

  // apply rotation if needed
  const orientation = await getOrientation(file);
  if (orientation === 3 || orientation === 6 || orientation === 8) {
    const rotation = ORIENTATION_TO_ANGLE[orientation];
    if (rotation) {
      imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
    }
  }
  return imageDataUrl;
}
function readFile(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}
export default EditProfile;
