import React from "react";
import { ProfileDiv } from "../Home/HomeCss";
import profile from "../../assets/Icons/profile.svg";
function ProfilePicture({
  InteractOnClick,
}: {
  InteractOnClick: null | (() => void);
}) {
  return (
    <>
      {InteractOnClick !== null ? (
        <ProfileDiv className="LeftSectionMobileS">
          <img onClick={InteractOnClick} src={profile} alt="ProfilePicture" />
        </ProfileDiv>
      ) : (
        <ProfileDiv className="LeftSectionMobileS">
          <img src={profile} alt="ProfilePicture" />
        </ProfileDiv>
      )}
    </>
  );
}

export default ProfilePicture;
