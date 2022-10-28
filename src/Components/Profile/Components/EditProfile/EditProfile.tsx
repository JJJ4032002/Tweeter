import React, { useState, useContext } from "react";
import ModalBackdrop from "../../../Elements/Modals/ModalBackdrop";
import Header from "./Components/Header";
import ProfileView from "../ProfileView";
import { EditProfileForm } from "./EditProfileCss";
import EditProfileInformation from "./Components/EditProfileInformation";
import { getOrientation } from "get-orientation/browser";
import { getRotatedImage } from "../../../Elements/Crop/CanvasUtils";
import Crop from "../../../Elements/Crop/Crop";
import ValidateParameter from "../../../../helpers/ValidateParameter";
import AddUserData from "../../../../firebase/AddUserData";
import { UserContext } from "../../../../Contexts/UserContext";
import { UserStatePartial } from "../../../../Interfaces and Types/Interfaces";
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
  let { user } = useContext(UserContext);
  let [initialUser, setInitialUser] = useState<UserStatePartial | null>(null);
  let [BannerImage, setBannerImage] = useState<string | null>(null);
  let [ProfileImage, setProfileImage] = useState<string | null>(null);
  const [inputVals, setInputVals] = useState({
    name: "",
    bio: "",
    location: "",
    website: "",
  });
  let [styles, setStyles] = useState([
    {
      type: "name",
      WhichState: "",
    },
    {
      type: "bio",
      WhichState: "",
    },
    {
      type: "location",
      WhichState: "",
    },
    {
      type: "website",
      WhichState: "",
    },
  ]);

  //Helps to prefill values in the form if the user data changes.
  if (user && user !== initialUser) {
    if (user.name && user.name !== inputVals.name) {
      handleInputVals("name", user.name);
      handleStyles("name", "WithTextBlurred");
    }
    if (user.bio && user.bio !== inputVals.bio) {
      handleInputVals("bio", user.bio);
      handleStyles("bio", "WithTextBlurred");
    }
    if (user.location && user.location !== inputVals.location) {
      handleInputVals("location", user.location);
      handleStyles("location", "WithTextBlurred");
    }
    if (user.website && user.website !== inputVals.website) {
      handleInputVals("website", user.website);
      handleStyles("website", "WithTextBlurred");
    }
    setInitialUser(user);
  }
  //handle the styles values on change
  function handleStyles(name: string, whichState: string) {
    setStyles((prev) => {
      return prev.map((element) => {
        if (name === element.type) {
          return { ...element, WhichState: whichState };
        } else {
          return { ...element };
        }
      });
    });
  }
  //handle the input values on change
  function handleInputVals(name: string, value: string) {
    setInputVals((prev) => {
      return { ...prev, [name]: value };
    });
  }
  //Function to save data to firebase
  function SaveUserData() {
    if (user && user.Id) {
      AddUserData(
        {
          name: inputVals.name,
          bio: inputVals.bio,
          location: inputVals.location,
          website: inputVals.website,
        },
        user.Id
      );
    }
  }
  function ResetInputFields(
    user: UserStatePartial | null,
    property: "name" | "bio" | "location" | "website"
  ) {
    if (user) {
      if (user[property] && user[property] !== undefined) {
        let value = user[property] as string;
        handleInputVals(property, value);
        handleStyles(property, "WithTextBlurred");
      } else {
        handleInputVals(property, "");
        handleStyles(property, "WithoutTextBlurred");
      }
    }
  }
  function ResetToOriginal() {
    ResetInputFields(user, "name");
    ResetInputFields(user, "bio");
    ResetInputFields(user, "location");
    ResetInputFields(user, "website");
  }
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
  let pattern = /^(ftp|http|https):\/\/[^ "]+$/;
  let disabled = !inputVals.name
    ? true
    : inputVals.website && !ValidateParameter(inputVals.website, pattern)
    ? true
    : false;
  return (
    <ModalBackdrop opacity={1} display={EditProfileState ? "flex" : "none"}>
      <EditProfileForm>
        <Header
          disabled={disabled}
          handleDispEditProfile={handleDispEditProfile}
          SaveUserData={SaveUserData}
          ResetToOriginal={ResetToOriginal}
        ></Header>
        <ProfileView
          onFileChangeBanner={onBannerFileChange}
          onFileChangeProfile={onProfileFileChange}
          Editable={true}
        ></ProfileView>
        <EditProfileInformation
          inputVals={inputVals}
          styles={styles}
          handleStyles={handleStyles}
          handleInputVals={handleInputVals}
        ></EditProfileInformation>
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

//Reads the file and returns a url
function readFile(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}
export default EditProfile;
